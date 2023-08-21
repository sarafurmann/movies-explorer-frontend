import { Section } from 'src/components/Section'

import styles from './AboutMe.module.css'
import avatar from 'src/images/avatar.jpg'

export const AboutMe = () => {
  return (
    <Section title="Студент" id="about-me" className={styles.aboutMe}>
      <div className={styles.aboutMeContent}>
        <div>
          <h2 className={styles.aboutMeTitle}>Виталий</h2>
          <p className={styles.aboutMeSubTitle}>Фронтенд-разработчик, 30 лет</p>
          <p className={styles.aboutMeDesc}>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена
            <br /> и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С<br /> 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по
            <br /> веб-разработке, начал заниматься фриланс-заказами и ушёл с
            постоянной работы.
          </p>
          <a
            className={styles.aboutMeLink}
            href="https://github.com/sarafurmann"
          >
            Github
          </a>
        </div>
        <div className={styles.aboutMeImg}>
          <img src={avatar} alt="Виталий" />
        </div>
      </div>
    </Section>
  )
}
