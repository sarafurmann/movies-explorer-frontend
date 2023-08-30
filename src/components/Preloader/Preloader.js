import React from 'react'
import styles from './Preloader.module.css'

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloaderContainer}>
        <span className={styles.preloaderRound}></span>
      </div>
    </div>
  )
}

export default Preloader
