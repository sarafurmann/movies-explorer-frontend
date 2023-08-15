import moviePicked from 'src/images/movie-picked.svg'
import movieUnpicked from 'src/images/movie-unpicked.svg'
import cross from 'src/images/cross.svg'
import styles from './MoviesCardList.module.css'
import { useMemo } from 'react'

export const MoviesCard = ({ name, duration, image, saved, picked }) => {
  const moviesStatusIcon = useMemo(() => {
    if (saved) {
      return cross
    }

    return picked ? moviePicked : movieUnpicked
  }, [saved, picked])

  return (
    <article className={styles.moviesCard}>
      <img className={styles.moviesCardImage} src={image} alt={name} />
      <div className={styles.moviesCardNameWrapper}>
        <h2 className={styles.moviesCardName}>{name}</h2>
        <img src={moviesStatusIcon} alt="movie add status" />
      </div>
      <span className={styles.moviesCardDuration}>{duration}</span>
    </article>
  )
}

export const MoviesCardList = ({ cards, saved }) => {
  return (
    <ul className={styles.moviesCardList}>
      {cards.map(({ name, duration, image, picked }, key) => (
        <li className={styles.moviesCardListItem} key={key}>
          <MoviesCard
            saved={saved}
            name={name}
            duration={duration}
            image={image}
            picked={picked}
          />
        </li>
      ))}
    </ul>
  )
}
