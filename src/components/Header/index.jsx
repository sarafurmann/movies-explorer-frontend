import clsx from 'clsx'
import logo from 'src/images/logo.svg'
import account from 'src/images/account.svg'
import hamburger from 'src/images/hamburger.svg'

import styles from './Header.module.css'

export const Header = ({ isMain }) => {
  if (isMain) {
    return (
      <header className={clsx(styles.header, styles.headerMain)}>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <a
          href="/signup"
          className={clsx(styles.headerSignUp, styles.headerNavLink)}
        >
          Регистрация
        </a>
        <a href="/signin" className={styles.headerSignIn}>
          Войти
        </a>
      </header>
    )
  }

  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src={logo} alt="Logo" />
      <a
        href="/movies"
        className={clsx(styles.headerNavLink, styles.headerNavLinkFilms)}
      >
        Фильмы
      </a>
      <a href="/saved-movies" className={styles.headerNavLink}>
        Сохранённые фильмы
      </a>
      <a href="/profile" className={styles.headerAccount}>
        <img src={account} alt="account" />
        Аккаунт
      </a>
      <img className={styles.headerHambergerMenu} src={hamburger} alt="Menu" />
    </header>
  )
}
