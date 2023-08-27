import { useEffect, useRef, useState } from 'react'

import { Input } from 'src/components/Input'
import { Button } from 'src/components/Button'

import styles from './SignInPage.module.css'
import logo from 'src/images/logo.svg'
import { mainApi } from 'src/utils/MainApi'

export const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const formRef = useRef(null)

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await mainApi.signin({
        email,
        password,
      })

      setError(null)
      localStorage.setItem('jwt', result.token)
      window.location.href = '/movies'
    } catch (error) {
      setError(error.status)
      if (error.status === 409) {
        setError('Пользователь с таким именем или email уже существует')
      }
    }
  }

  useEffect(() => {
    setDisabled(!formRef.current.checkValidity())
  }, [email, password])

  return (
    <div className={styles.signinPage}>
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className={styles.signinPageContainer}
      >
        <a href="/">
          <img className={styles.signinPageLogo} src={logo} alt="Logo" />
        </a>
        <h1 className={styles.signinPageTitle}>Рады видеть</h1>
        <Input
          value={email}
          onChange={onEmailChange}
          className={styles.signinPageInput}
          type="email"
          label="E-mail"
          required
          pattern="^.+@.+\..+$"
        />
        <Input
          value={password}
          onChange={onPasswordChange}
          className={styles.signinPageInput}
          type="password"
          label="Пароль"
          required
        />
        {error ? <div className={styles.signinError}>{error}</div> : null}
        <Button
          disabled={disabled}
          type="submit"
          className={styles.signinPageButton}
        >
          Войти
        </Button>
        <div className={styles.signinPageExtra}>
          <span className={styles.signinPageExtraText}>
            Ещё не зарегистрированы?
          </span>
          <a className={styles.signinPageExtraLink} href="/signup">
            Регистрация
          </a>
        </div>
      </form>
    </div>
  )
}
