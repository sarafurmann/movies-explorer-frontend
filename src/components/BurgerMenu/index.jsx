import account from 'src/images/account.svg'
import cross from 'src/images/cross-burger.svg'

import styles from './BurgerMenu.module.css'

export const BurgerMenu = ({ onClose }) => {
  return (
    <div className={styles.burgerMenuWraper}>
      <img
        className={styles.burgerMenuClose}
        onClick={onClose}
        src={cross}
        alt="close"
      />
      <div className={styles.burgerMenu}>
        <a className={styles.burgerMenuLink} href="/">
          Главная
        </a>
        <a className={styles.burgerMenuLink} href="/movies">
          Фильмы
        </a>
        <a className={styles.burgerMenuLink} href="/saved-movies">
          Сохранённые фильмы
        </a>
        <a className={styles.burgerMenuLinkAccount} href="/profile">
          <img src={account} alt="account" />
          Аккаунт
        </a>
      </div>
    </div>
  )
}
