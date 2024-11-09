import styles from './KeyboardButton.module.scss'
import { useState } from 'react'

const KeyboardButton = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.buttonContainerAll}>
      <button title="i made it for 4 hours" className={`${styles.buttonContainer} ${isActive ? styles.active : ''}`} onClick={handleClick}>
        <div className={`${styles.button} ${isActive ? styles.active : ''}`}>
          <div className={styles.buttonPressZone}>
            <div className={styles.buttonImageContainer}>
              <div className={styles.buttonImage}>
                <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7L12 2V22L17 17L7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </button>
      <div className={`${styles.buttonIndicator} ${isActive ? styles.active : ''}`} />
    </div>
  )
}

export { KeyboardButton }
