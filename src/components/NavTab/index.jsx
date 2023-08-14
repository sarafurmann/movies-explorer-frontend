import styles from './NavTab.module.css'

export const NavTab = () => {
  return (
    <section className={styles.navTab}>
      <a className={styles.navLink} href="#about-project">
        О проекте
      </a>
      <a className={styles.navLink} href="#techs">
        Технологии
      </a>
      <a className={styles.navLink} href="#about-me">
        Студент
      </a>
    </section>
  )
}
