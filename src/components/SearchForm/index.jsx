import search from 'src/images/search.svg'
import search2 from 'src/images/search2.svg'
import switchOn from 'src/images/switch-on.svg'
import switchOff from 'src/images/switch-off.svg'
import styles from './SearchForm.module.css'
import clsx from 'clsx'
import { useState } from 'react'

export const SearchForm = ({
  className,
  onChange,
  defaultSearchValue,
  defaultShortOnly,
}) => {
  const [searchValue, setSearchValue] = useState(defaultSearchValue)
  const [shortOnly, setShortOnly] = useState(defaultShortOnly)

  const onSearchValueChange = (e) => {
    e.target.setCustomValidity('')
    setSearchValue(e.target.value)
  }

  const onShortOnlyChange = (e) => {
    setShortOnly(e.target.checked)
  }

  const onInvalidInput = (e) => {
    e.target.setCustomValidity('Нужно ввести ключевое слово')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onChange({ searchValue, shortOnly })
  }

  return (
    <form onSubmit={onSubmit} className={styles.searchForm}>
      <div className={clsx(className, styles.searchFormContent)}>
        <label className={styles.searchFormInputLabel}>
          <img
            className={styles.searchFormInputIcon}
            src={search}
            alt="search icon"
          />
          <input
            placeholder="Фильм"
            className={styles.searchFormInput}
            type="text"
            value={searchValue}
            required
            onChange={onSearchValueChange}
            onInvalid={onInvalidInput}
          />
        </label>
        <button type="submit" className={styles.searchFormButton}>
          <img
            className={styles.searchFormButtonIcon}
            src={search2}
            alt="another search icon"
          />
        </button>
        <div className={styles.searchFormDesktop}>
          <input
            className={styles.searchFormSwitchInput}
            id="switch"
            type="checkbox"
            onChange={onShortOnlyChange}
            checked={shortOnly}
          />
          <label htmlFor="switch" className={styles.searchFormSwitchLabel}>
            <img
              className={styles.searchFormSwitchOn}
              src={switchOn}
              alt="on"
            />
            <img
              className={styles.searchFormSwitchOff}
              src={switchOff}
              alt="off"
            />
            Короткометражки
          </label>
        </div>
      </div>
      <div className={styles.searchFormMobile}>
        <input
          className={styles.searchFormSwitchInput}
          id="switch2"
          type="checkbox"
          checked={shortOnly}
          onChange={onShortOnlyChange}
        />
        <label htmlFor="switch2" className={styles.searchFormSwitchLabel}>
          <img className={styles.searchFormSwitchOn} src={switchOn} alt="on" />
          <img
            className={styles.searchFormSwitchOff}
            src={switchOff}
            alt="off"
          />
          Короткометражки
        </label>
      </div>
    </form>
  )
}
