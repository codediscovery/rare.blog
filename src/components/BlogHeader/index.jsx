import React from 'react'
import styles from './styles.module.scss'

export const BlogHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>Editorial</h1>
      <p className={styles.header__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit nisi et pellentesque maximus. Nunc
        ornare tincidunt egestas.
      </p>
    </div>
  )
}
