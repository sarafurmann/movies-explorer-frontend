import { Section } from 'src/components/Section'

import styles from './Techs.module.css'

const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']

export const Techs = () => {
  return (
    <Section title="Технологии" className={styles.techs} id="techs">
      <div className={styles.techsContent}>
        <h2 className={styles.techsContentTitle}>7 Технологий</h2>
        <p className={styles.techsContentDesc}>
          На курсе веб-разработки мы освоили технологии, которые применили
          <br />в дипломном проекте.
        </p>
        <ul className={styles.techsSkillsList}>
          {techs.map((t) => (
            <li className={styles.techsSkillsItem} key={t}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
