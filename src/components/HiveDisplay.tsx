import React from 'react'
import type { TimerType } from '../types/timer'
import { TimerState } from '../types/timer'
import { formatTime } from '../utils/timeUtils'
import styles from './HiveDisplay.module.css'

interface HiveDisplayProps {
  timeLeft: number
  timerType: TimerType
  isRunning: boolean
  timerState: typeof TimerState[keyof typeof TimerState]
}

const HiveDisplay: React.FC<HiveDisplayProps> = ({
  timeLeft,
  timerType,
  isRunning,
  timerState
}) => {
  const getDisplayMessage = () => {
    switch (timerType) {
      case 'work':
        return 'Time to work like a busy bee! 🐝'
      case 'shortBreak':
        return 'Take a short break and enjoy some honey! 🍯'
      case 'longBreak':
        return 'Long break - rest in the hive! 🏠'
      default:
        return 'Ready to buzz?'
    }
  }

  const getTimerColor = () => {
    switch (timerType) {
      case 'work':
        return 'var(--work-color)'
      case 'shortBreak':
        return 'var(--short-break-color)'
      case 'longBreak':
        return 'var(--long-break-color)'
      default:
        return 'var(--work-color)'
    }
  }

  return (
    <div className={`${styles.hiveDisplay} ${isRunning ? styles.buzzing : ''}`}>
      <div className={styles.honeycomb}>
        <div 
          className={styles.hexagon}
          style={{ '--timer-color': getTimerColor() } as React.CSSProperties}
        >
          <div className={styles.hexagonInner}>
            <div className={styles.timeDisplay}>
              <div className={styles.timeText}>
                {formatTime(timeLeft)}
              </div>
              <div className={styles.sessionType}>
                {timerType === 'work' ? 'WORK' : 
                 timerType === 'shortBreak' ? 'SHORT BREAK' : 'LONG BREAK'}
              </div>
              {timerState === TimerState.COMPLETED && (
                <div className={styles.completedMessage}>
                  ✨ Session Complete! ✨
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.messageContainer}>
        <p className={styles.sessionMessage}>
          {getDisplayMessage()}
        </p>
      </div>
      
      {isRunning && (
        <div className={styles.beeAnimation}>
          <span className={styles.bee}>🐝</span>
        </div>
      )}
    </div>
  )
}

export default HiveDisplay
