import { Section } from 'src/components/Section'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Section>
        <div className={styles.footerName}>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerCopyright}>© 2023</div>
          <a className={styles.footerLink} href="https://practicum.yandex.ru/">
            Яндекс.Практикум
          </a>
          <a
            className={styles.footerLink}
            href="https://github.com/sarafurmann"
          >
            Github
          </a>
        </div>
      </Section>
    </footer>
  )
}
