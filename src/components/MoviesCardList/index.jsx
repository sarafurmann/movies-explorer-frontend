import moviePicked from 'src/images/movie-picked.svg'
import movieUnpicked from 'src/images/movie-unpicked.svg'
import cross from 'src/images/cross.svg'
import styles from './MoviesCardList.module.css'
import { useMemo, useState } from 'react'

const getDuration = (value) => {
  const hours = Math.trunc(value / 60)
  const minutes = value % 60

  if (hours === 0) {
    return `${minutes}м`
  }

  if (minutes === 0) {
    return `${hours}ч`
  }

  return `${hours}ч${minutes}м`
}

export const MoviesCard = ({
  name,
  duration,
  image,
  trailerLink,
  saved,
  picked,
  onLikeClick,
}) => {
  const [disabled, setDiasbled] = useState(false)
  const moviesStatusIcon = useMemo(() => {
    if (saved) {
      return cross
    }

    return picked ? moviePicked : movieUnpicked
  }, [saved, picked])

  const onClick = async () => {
    setDiasbled(true)
    await onLikeClick()
    setDiasbled(false)
  }

  return (
    <article className={styles.moviesCard}>
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img className={styles.moviesCardImage} src={image} alt={name} />
      </a>
      <div className={styles.moviesCardNameWrapper}>
        <h2 className={styles.moviesCardName}>{name}</h2>
        <button
          onClick={onClick}
          className={styles.moviesCardButton}
          type="button"
          disabled={disabled}
        >
          <img src={moviesStatusIcon} alt="movie add status" />
        </button>
      </div>
      <span className={styles.moviesCardDuration}>{getDuration(duration)}</span>
    </article>
  )
}

export const MoviesCardList = ({ cards, saved, likeMovie }) => {
  if (cards.length === 0) {
    return <h1>Ничего не найдено</h1>
  }

  return (
    <ul className={styles.moviesCardList}>
      {cards.map(
        ({
          nameRU,
          nameEN,
          duration,
          image,
          movieId,
          trailerLink,
          description,
          year,
          director,
          country,
          thumbnail,
          picked,
        }) => (
          <li className={styles.moviesCardListItem} key={movieId}>
            <MoviesCard
              saved={saved}
              name={nameRU}
              duration={duration}
              image={image}
              picked={picked}
              trailerLink={trailerLink}
              onLikeClick={() =>
                likeMovie({
                  nameEN,
                  nameRU,
                  movieId,
                  thumbnail,
                  trailerLink,
                  image,
                  description,
                  year,
                  director,
                  duration,
                  country,
                })
              }
            />
          </li>
        ),
      )}
    </ul>
  )
}
