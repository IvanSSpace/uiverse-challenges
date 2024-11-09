import styles from './KeyboardButton.module.scss'

const KeyboardButton = () => {
  return (
    <div className={styles.buttonContainerAll}>
      <label>
        <input title="i made it for 7 hours" type="checkbox" className={styles.hiddenCheckbox} />
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <div className={styles.buttonPressZone}>
              <div className={styles.buttonImageContainer}>
                <div className={styles.buttonImage}>
                  <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17L17 7L12 2V22L17 17L7 7"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonIndicator} />
      </label>
    </div>
  )
}

export { KeyboardButton }
