import React from 'react'
import styles from '../styles/toggleButton.module.css'

const ToggleButton = () => {
  return (
    <div className={styles.toggleContainer}>
      <body>
        <input className='input' type="checkbox" id={styles.darkmode_toggle} />
        <label className='label' htmlFor={styles.darkmode_toggle}>
        </label>

        <div className={styles.background}></div>
      </body>
    </div>
  );
}

export default ToggleButton