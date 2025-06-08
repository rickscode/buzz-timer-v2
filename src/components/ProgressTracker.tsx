import React from 'react'
import styles from './ProgressTracker.module.css'

interface ProgressTrackerProps {
  completedSessions: number
  // currentType: TimerType // Could be used for different honey jar colors in future
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  completedSessions
}) => {
  const maxSessions = 8 // Show up to 8 sessions
  const sessionsToShow = Math.min(completedSessions, maxSessions)

  const renderHoneyCells = () => {
    const cells = []
    
    for (let i = 0; i < maxSessions; i++) {
      const isFilled = i < sessionsToShow
      cells.push(
        <div
          key={i}
          className={`${styles.honeyCell} ${isFilled ? styles.filled : ''}`}
        >
          {isFilled ? '🍯' : '⬡'}
        </div>
      )
    }
    
    return cells
  }

  return (
    <div className={styles.progressTracker}>
      <h3 className={styles.trackerTitle}>Honey Collection Progress</h3>
      
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{completedSessions}</span>
          <span className={styles.statLabel}>Sessions Completed</span>
        </div>
        
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{Math.floor(completedSessions / 4)}</span>
          <span className={styles.statLabel}>Full Cycles</span>
        </div>
      </div>
      
      <div className={styles.honeycombGrid}>
        <div className={styles.gridTitle}>Recent Sessions</div>
        <div className={styles.honeyGrid}>
          {renderHoneyCells()}
        </div>
        {completedSessions > maxSessions && (
          <div className={styles.overflow}>
            +{completedSessions - maxSessions} more sessions! 🎉
          </div>
        )}
      </div>
      
      <div className={styles.motivationalMessage}>
        {completedSessions === 0 && (
          <p>🐝 Start working to collect your first drop of honey!</p>
        )}
        {completedSessions > 0 && completedSessions < 4 && (
          <p>🍯 Great start! Keep buzzing to complete your first cycle!</p>
        )}
        {completedSessions >= 4 && completedSessions < 8 && (
          <p>⭐ Excellent work! You're building a productive hive!</p>
        )}
        {completedSessions >= 8 && (
          <p>🏆 Amazing! You're a true productivity bee! The hive is proud!</p>
        )}
      </div>
    </div>
  )
}

export default ProgressTracker
