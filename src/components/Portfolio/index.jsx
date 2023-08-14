import { Section } from 'src/components/Section'

import styles from './Portfolio.module.css'

const projects = [
  { name: 'Статичный сайт', href: '#' },
  { name: 'Адаптивный сайт', href: '#' },
  { name: 'Одностраничное приложение', href: '#' },
]

export const Portfolio = () => {
  return (
    <Section className={styles.portfolio}>
      <h1 className={styles.portfolioTitle}>Портфолио</h1>
      <ul>
        {projects.map(({ name, href }) => (
          <div key={name} className={styles.portfolioProject}>
            <span className={styles.portfolioProjectName}>{name}</span>
            <a className={styles.portfolioProjectLink} href={href}>
              ↗
            </a>
          </div>
        ))}
      </ul>
    </Section>
  )
}
