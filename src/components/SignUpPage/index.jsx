import { Input } from 'src/components/Input'
import { Button } from 'src/components/Button'

import styles from 'src/components/SignInPage/SignInPage.module.css'
import logo from 'src/images/logo.svg'
import { useEffect, useRef, useState } from 'react'
import { mainApi } from 'src/utils/MainApi'

export const SignUpPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const formRef = useRef(null)

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await mainApi.signup({
        name,
        email,
        password,
      })

      setError(null)

      const result = await mainApi.signin({
        email,
        password,
      })

      localStorage.setItem('jwt', result.token)
      window.location.href = '/movies'
    } catch (error) {
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
        <h1 className={styles.signinPageTitle}>Добро пожаловать!</h1>
        <Input
          value={name}
          onChange={onNameChange}
          className={styles.signinPageInput}
          label="Имя"
          required
        />
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
          Зарегистрироваться
        </Button>
        <div className={styles.signinPageExtra}>
          <span className={styles.signinPageExtraText}>
            Уже зарегистрированы?
          </span>
          <a className={styles.signinPageExtraLink} href="/signin">
            Войти
          </a>
        </div>
      </form>
    </div>
  )
}
