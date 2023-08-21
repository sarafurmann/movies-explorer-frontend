import styles from './ErrorPage.module.css'

export const ErrorPage = () => {
  return (
    <div className={styles.erorr}>
      <h1 className={styles.erorrStatus}>404</h1>
      <h2 className={styles.errorText}>Страница не найдена</h2>
      <a href="/" className={styles.erorrBack} type="button">
        Назад
      </a>
    </div>
  )
}
