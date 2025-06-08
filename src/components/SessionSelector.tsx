import React from 'react'
import type { TimerType } from '../types/timer'
import styles from './SessionSelector.module.css'

interface SessionSelectorProps {
  currentType: TimerType
  onTypeChange: (type: TimerType) => void
  isRunning: boolean
}

const SessionSelector: React.FC<SessionSelectorProps> = ({
  currentType,
  onTypeChange,
  isRunning
}) => {
  const sessions = [
    { type: 'work' as TimerType, label: 'Work', icon: '🐝', duration: '25 min' },
    { type: 'shortBreak' as TimerType, label: 'Short Break', icon: '🍯', duration: '5 min' },
    { type: 'longBreak' as TimerType, label: 'Long Break', icon: '🏠', duration: '15 min' }
  ]

  return (
    <div className={styles.sessionSelector}>
      <h3 className={styles.selectorTitle}>Choose Your Session</h3>
      <div className={styles.sessionOptions}>
        {sessions.map(({ type, label, icon, duration }) => (
          <button
            key={type}
            className={`${styles.sessionOption} ${
              currentType === type ? styles.active : ''
            } ${isRunning ? styles.disabled : ''}`}
            onClick={() => !isRunning && onTypeChange(type)}
            disabled={isRunning}
          >
            <div className={styles.sessionIcon}>{icon}</div>
            <div className={styles.sessionInfo}>
              <div className={styles.sessionLabel}>{label}</div>
              <div className={styles.sessionDuration}>{duration}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SessionSelector
