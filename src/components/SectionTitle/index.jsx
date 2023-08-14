import clsx from 'clsx'
import styles from './SectionTitle.module.css'

export const SectionTitle = ({ text, className }) => {
  return <h1 className={clsx(styles.sectionTitle, className)}>{text}</h1>
}
