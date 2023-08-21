import { Section } from 'src/components/Section'

import styles from './AboutProject.module.css'

export const AboutProject = () => {
  return (
    <Section
      id="about-project"
      className={styles.aboutProject}
      title="О проекте"
    >
      <div className={styles.aboutProjectInfo}>
        <article className={styles.aboutProjectInfoCard}>
          <h2 className={styles.aboutProjectInfoCardTitle}>
            Дипломный проект включал 5 этапов
          </h2>
          <p className={styles.aboutProjectInfoCardText}>
            Составление плана, работу над бэкендом, вёрстку, добавление
            <br />
            функциональности и финальные доработки.
          </p>
        </article>
        <article className={styles.aboutProjectInfoCard}>
          <h2 className={styles.aboutProjectInfoCardTitle}>
            На выполнение диплома ушло 5 недель
          </h2>
          <p className={styles.aboutProjectInfoCardText}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            <br />
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className={styles.aboutProjectPath}>
        <div className={styles.aboutProjectPathStep}>
          <div className={styles.aboutProjectPathStepTime}>1 неделя</div>
          <div className={styles.aboutProjectPathName}>Back-end</div>
        </div>
        <div className={styles.aboutProjectPathStep}>
          <div className={styles.aboutProjectPathStepTime}>4 недели</div>
          <div className={styles.aboutProjectPathName}>Front-end</div>
        </div>
      </div>
    </Section>
  )
}
