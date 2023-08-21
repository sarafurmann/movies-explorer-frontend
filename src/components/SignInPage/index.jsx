import { Input } from 'src/components/Input'
import { Button } from 'src/components/Button'

import styles from './SignInPage.module.css'
import logo from 'src/images/logo.svg'

export const SignInPage = () => {
  return (
    <div className={styles.signinPage}>
      <div className={styles.signinPageContainer}>
        <img className={styles.signinPageLogo} src={logo} alt="Logo" />
        <h1 className={styles.signinPageTitle}>Рады видеть</h1>
        <Input className={styles.signinPageInput} label="E-mail" />
        <Input className={styles.signinPageInput} label="Пароль" />
        <Button className={styles.signinPageButton}>Войти</Button>
        <div className={styles.signinPageExtra}>
          <span className={styles.signinPageExtraText}>
            Ещё не зарегистрированы?
          </span>
          <a className={styles.signinPageExtraLink} href="/signup">
            Регистрация
          </a>
        </div>
      </div>
    </div>
  )
}
