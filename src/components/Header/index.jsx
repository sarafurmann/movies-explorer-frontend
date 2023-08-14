import clsx from 'clsx'
import logo from 'src/images/logo.svg'

import styles from './Header.module.css'

export const Header = ({ isMain }) => {
  return (
    <header className={clsx(styles.header, isMain && styles.headerMain)}>
      <img src={logo} alt="Logo" />
      <a href="/signup" className={styles.signUp}>
        Регистрация
      </a>
      <button className={styles.signIn}>Войти</button>
    </header>
  )
}
