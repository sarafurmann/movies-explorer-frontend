import { useContext, useState } from 'react'
import { CurrentUserContext } from 'src/contexts/CurrentUserContext'
import { Header } from 'src/components/Header'

import styles from './ProfilePage.module.css'
import { mainApi } from 'src/utils/MainApi'

export const ProfilePage = () => {
  const { user } = useContext(CurrentUserContext)
  const [disabled, setDisabled] = useState(false)
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)

  const signOut = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  const editUser = async () => {
    setDisabled(true)
    await mainApi.editUser({ name, email })
    setDisabled(false)
  }

  return (
    <>
      <Header />
      <main className={styles.profilePage}>
        <h1 className={styles.profilePageTitle}>Привет, Виталий!</h1>
        <div className={styles.profilePageRow}>
          <span className={styles.profilePageField}>Имя</span>
          <input
            className={styles.profilePageValue}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className={styles.profilePageRow}>
          <span className={styles.profilePageField}>E-mail</span>
          <input
            className={styles.profilePageValue}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button
          disabled={disabled}
          onClick={editUser}
          className={styles.profilePageEditButton}
        >
          Редактировать
        </button>
        <button onClick={signOut} className={styles.profilePageExitButton}>
          Выйти из аккаунта
        </button>
      </main>
    </>
  )
}
