import { useContext, useEffect, useMemo, useState } from 'react'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { MoviesCardList } from 'src/components/MoviesCardList'
import { SearchForm } from 'src/components/SearchForm'
import { moviesApi } from 'src/utils/MoviesApi'

import styles from './MoviesPage.module.css'
import Preloader from '../Preloader/Preloader'
import { mainApi } from 'src/utils/MainApi'
import { CurrentUserContext } from 'src/contexts/CurrentUserContext'

const mapMovie = ({
  nameRU,
  nameEN,
  duration,
  image,
  id,
  trailerLink,
  description,
  year,
  director,
  country,
}) => ({
  nameEN,
  nameRU,
  movieId: id,
  thumbnail: new URL(
    image.formats.thumbnail.url,
    'https://api.nomoreparties.co',
  ),
  trailerLink,
  image: new URL(image.url, 'https://api.nomoreparties.co'),
  description,
  year,
  director,
  duration,
  country,
})

const getLocalStorageItem = (name, saved = false) => {
  return localStorage.getItem(saved ? `my.${name}` : name)
}

const setLocalStorageItem = (name, value, saved = false) => {
  localStorage.setItem(saved ? `my.${name}` : name, value)
}

export const MoviesPage = ({ saved }) => {
  const [status, setStatus] = useState(
    getLocalStorageItem('status', saved) ?? 'idle',
  )
  const [movies, setMovies] = useState(
    JSON.parse(getLocalStorageItem('movies', saved)) ?? [],
  )
  const [searchValue, setSearchValue] = useState(
    getLocalStorageItem('searchValue', saved) ?? '',
  )
  const [shortOnly, setShortOnly] = useState(
    JSON.parse(getLocalStorageItem('shortOnly', saved)) ?? false,
  )
  const [limit, setLimit] = useState(getLocalStorageItem('limit', saved) ?? 4)
  const [rows, setRows] = useState(getLocalStorageItem('rows', saved) ?? 4)
  const { myMovies, setMyMovies } = useContext(CurrentUserContext)
  const myMoviesSet = new Set(myMovies?.map(({ movieId }) => movieId))

  const filteredMovies = (saved ? myMovies : movies).filter((movie) => {
    if (shortOnly && movie.duration > 40) {
      console.log('shortOnly', shortOnly)
      return false
    }

    const value = searchValue.toLocaleLowerCase()
    const nameRU = movie.nameRU.toLocaleLowerCase()
    const nameEN = movie.nameEN.toLocaleLowerCase()
    return nameRU.includes(value) || nameEN.includes(value)
  })

  const resultMovies = filteredMovies.slice(0, rows * limit).map((movie) => {
    return {
      ...movie,
      picked: myMoviesSet.has?.(movie.movieId),
    }
  })

  useEffect(() => {
    let locked = false
    const onResize = () => {
      if (locked) {
        return
      }

      locked = true
      setTimeout(() => {
        locked = false
      }, 500)

      if (window.innerWidth > 768) {
        setLimit(4)
        setRows(4)
        setLocalStorageItem('limit', 4, saved)
        return
      }

      if (window.innerWidth >= 480) {
        setLimit(2)
        setRows(4)
        setLocalStorageItem('limit', 2, saved)
        return
      }

      setLimit(1)
      setRows(5)
      setLocalStorageItem('limit', 1, saved)
    }

    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [saved])

  const onSearchValueChange = ({ searchValue, shortOnly }) => {
    if (saved) {
      setSearchValue(searchValue)
      setLocalStorageItem('searchValue', searchValue, saved)
      setShortOnly(shortOnly)
      setLocalStorageItem('shortOnly', shortOnly, saved)
      setStatus('success')
      setLocalStorageItem('status', 'success', saved)
    } else {
      setStatus('loading')
      moviesApi
        .getMovies()
        .then((res) => {
          const mappedMovies = res.map(mapMovie)
          setMovies(mappedMovies)
          setLocalStorageItem('movies', JSON.stringify(mappedMovies), saved)
          setSearchValue(searchValue)
          setLocalStorageItem('searchValue', searchValue, saved)
          setShortOnly(shortOnly)
          setLocalStorageItem('shortOnly', shortOnly, saved)
          setStatus('success')
          setLocalStorageItem('status', 'success', saved)
        })
        .catch(() => setStatus('error'))
    }
  }

  const onMoreClick = () => {
    const inc = limit === 1 ? 2 : 1
    setRows((prev) => prev + inc)
    setLocalStorageItem('rows', rows + inc, saved)
  }

  const likeMovie = async (data) => {
    if (myMoviesSet.has(data.movieId)) {
      const id = myMovies.find(({ movieId }) => movieId === data.movieId)?._id
      await mainApi.dislikeMovie(id)
    } else {
      await mainApi.likeMovie(data)
    }

    const res = await mainApi.getMovies()
    setMyMovies(res.data)
  }

  return (
    <>
      <Header />
      <main className={styles.moviesPage}>
        <div className={styles.moviesPageSearchForm}>
          <SearchForm
            onChange={onSearchValueChange}
            defaultSearchValue={searchValue}
            defaultShortOnly={shortOnly}
          />
        </div>
        {status === 'loading' ? <Preloader /> : null}
        {status === 'success' || saved ? (
          <MoviesCardList
            likeMovie={likeMovie}
            saved={saved}
            cards={resultMovies}
          />
        ) : null}
        {filteredMovies.length > resultMovies.length ? (
          <button
            onClick={onMoreClick}
            className={styles.moviesPageButton}
            type="button"
          >
            Ещё
          </button>
        ) : null}
      </main>
      <Footer />
    </>
  )
}
