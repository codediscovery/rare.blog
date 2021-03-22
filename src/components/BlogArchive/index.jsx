import React from 'react'
import styles from './styles.module.scss'

export const BlogArchive = () => {
  return (
    <div className={styles.archive}>
      <h2 className={styles.archive__title}>Archive</h2>

      <div className={styles.archive__list}>
        <a href="#">September 2019</a>
        <a href="#">August 2019</a>
        <a href="#">July 2019</a>
      </div>
    </div>
  )
}
