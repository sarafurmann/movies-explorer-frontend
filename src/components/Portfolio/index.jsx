import { Section } from 'src/components/Section'

import styles from './Portfolio.module.css'

const projects = [
  {
    name: 'Статичный сайт',
    href: 'https://sarafurmann.github.io/how-to-learn/',
  },
  {
    name: 'Адаптивный сайт',
    href: 'https://sarafurmann.github.io/russian-travel/',
  },
  {
    name: 'Одностраничное приложение',
    href: 'https://github.com/sarafurmann/mesto-react',
  },
]

export const Portfolio = () => {
  return (
    <Section className={styles.portfolio}>
      <h1 className={styles.portfolioTitle}>Портфолио</h1>
      <ul>
        {projects.map(({ name, href }) => (
          <li className={styles.portfolioProjectItem} key={name}>
            <a
              href={href}
              target="_blank"
              className={styles.portfolioProject}
              rel="noreferrer"
            >
              <span className={styles.portfolioProjectName}>{name}</span>
              <span className={styles.portfolioProjectIcon}>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
