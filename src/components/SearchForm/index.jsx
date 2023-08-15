import search from 'src/images/search.svg'
import search2 from 'src/images/search2.svg'
import switchOn from 'src/images/switch-on.svg'
import switchOff from 'src/images/switch-off.svg'
import styles from './SearchForm.module.css'
import clsx from 'clsx'

export const SearchForm = ({ className }) => {
  return (
    <form className={styles.searchForm}>
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
          />
        </label>
        <img
          className={styles.searchFormIcon}
          src={search2}
          alt="another search icon"
        />
        <div className={styles.searchFormDesktop}>
          <input
            className={styles.searchFormSwitchInput}
            id="switch"
            type="checkbox"
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
