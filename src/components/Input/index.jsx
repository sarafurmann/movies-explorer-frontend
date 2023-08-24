import clsx from 'clsx'

import styles from './Input.module.css'

export const Input = ({
  className,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
}) => {
  return (
    <label className={clsx(styles.label, className)}>
      <span>{label}</span>
      <input
        value={value}
        onChange={onChange}
        className={styles.input}
        type={type}
        required={required}
      />
    </label>
  )
}
