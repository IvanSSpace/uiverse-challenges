import styles from './KeyboardButton.module.scss'
import { useState } from 'react'

const KeyboardButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.buttonContainerAll}>
    <button 
      title='1' 
      className={`${styles.buttonContainer} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      <div className={`${styles.button} ${isActive ? styles.active : ''}`}>
        <div className={styles.buttonPressZone}></div>
      </div>
    </button>
    <div className={`${styles.buttonIndicator} ${isActive ? styles.active : ''}`} />
    </div>
  )
}

export { KeyboardButton }
