import React from 'react'
import styles from './ErrorMessage.module.css'
function ErrorMessage({length}) {
  return (!length && <h2 className={styles.errorHead}>No todo items in the List</h2>)
}

export default ErrorMessage