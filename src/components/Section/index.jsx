import clsx from 'clsx'

import { SectionTitle } from 'src/components/SectionTitle'

import styles from './Section.module.css'

export const Section = ({ id, title, children, className }) => {
  return (
    <section id={id} className={clsx(styles.section, className)}>
      {title ? <SectionTitle text={title} /> : null}
      {children}
    </section>
  )
}
