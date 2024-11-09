import styles from './KeyboardButton.module.scss'

const KeyboardButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button}>
        <div className={styles.buttonPressZone}></div>
      </div>
    </div>
  )
}

export { KeyboardButton }
