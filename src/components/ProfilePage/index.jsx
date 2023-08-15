import { Header } from 'src/components/Header'
import styles from './ProfilePage.module.css'

export const ProfilePage = () => {
  return (
    <>
      <Header />
      <main className={styles.profilePage}>
        <h1 className={styles.profilePageTitle}>Привет, Виталий!</h1>
        <div className={styles.profilePageRow}>
          <span className={styles.profilePageField}>Имя</span>
          <span className={styles.profilePageValue}>Виталий</span>
        </div>
        <div className={styles.profilePageRow}>
          <span className={styles.profilePageField}>E-mail</span>
          <span className={styles.profilePageValue}>pochta@yandex.ru</span>
        </div>
        <button className={styles.profilePageEditButton}>Редактировать</button>
        <button className={styles.profilePageExitButton}>
          Выйти из аккаунта
        </button>
      </main>
    </>
  )
}
