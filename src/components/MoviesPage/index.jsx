import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { MoviesCardList } from 'src/components/MoviesCardList'
import { SearchForm } from 'src/components/SearchForm'

import moviePic from 'src/images/movie.jpeg'

import styles from './MoviesPage.module.css'

const movie = {
  name: 'Тестовыф фильм',
  duration: '1ч42м',
  image: moviePic,
}

export const MoviesPage = ({ saved }) => {
  return (
    <>
      <Header />
      <main className={styles.moviesPage}>
        <div className={styles.moviesPageSearchForm}>
          <SearchForm />
        </div>
        <MoviesCardList
          saved={saved}
          cards={Array.from({ length: 12 }, (_, i) =>
            i % 2 === 0 ? { ...movie, picked: true } : movie,
          )}
        />
        <button className={styles.moviesPageButton} type="button">
          Ещё
        </button>
      </main>
      <Footer />
    </>
  )
}
