import clsx from 'clsx'

import styles from './Input.module.css'

export const Input = ({ className, label, type = 'text' }) => {
  return (
    <label className={clsx(styles.label, className)}>
      <span>{label}</span>
      <input className={styles.input} type={type} />
    </label>
  )
}
