import { Input } from 'src/components/Input'
import { Button } from 'src/components/Button'

import styles from 'src/components/SignInPage/SignInPage.module.css'
import logo from 'src/images/logo.svg'

export const SignUpPage = () => {
  return (
    <div className={styles.signinPage}>
      <div className={styles.signinPageContainer}>
        <img className={styles.signinPageLogo} src={logo} alt="Logo" />
        <h1 className={styles.signinPageTitle}>Добро пожаловать!</h1>
        <Input className={styles.signinPageInput} label="Имя" />
        <Input className={styles.signinPageInput} label="E-mail" />
        <Input className={styles.signinPageInput} label="Пароль" />
        <Button className={styles.signinPageButton}>Зарегистрироваться</Button>
        <div className={styles.signinPageExtra}>
          <span className={styles.signinPageExtraText}>
            Уже зарегистрированы?
          </span>
          <a className={styles.signinPageExtraLink} href="/signin">
            Войти
          </a>
        </div>
      </div>
    </div>
  )
}
