import React from 'react'
import styles from './TimerControls.module.css'

interface TimerControlsProps {
  isRunning: boolean
  onStart: () => void
  onPause: () => void
  onReset: () => void
  onBuzz: () => void
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  onStart,
  onPause,
  onReset,
  onBuzz
}) => {
  return (
    <div className={styles.controls}>
      <button
        className={`${styles.controlButton} ${styles.primaryButton}`}
        onClick={isRunning ? onPause : onStart}
      >
        {isRunning ? (
          <>
            <span className={styles.buttonIcon}>⏸️</span>
            Pause
          </>
        ) : (
          <>
            <span className={styles.buttonIcon}>▶️</span>
            Start
          </>
        )}
      </button>
      
      <button
        className={`${styles.controlButton} ${styles.secondaryButton}`}
        onClick={onReset}
      >
        <span className={styles.buttonIcon}>🔄</span>
        Reset
      </button>
      
      <button
        className={`${styles.controlButton} ${styles.buzzButton}`}
        onClick={onBuzz}
        title="Test buzz sound"
      >
        <span className={styles.buttonIcon}>🐝</span>
        Buzz
      </button>
    </div>
  )
}

export default TimerControls
