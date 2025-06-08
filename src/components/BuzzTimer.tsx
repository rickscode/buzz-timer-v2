import React, { useState, useEffect } from 'react'
import type { TimerType } from '../types/timer'
import { TimerState } from '../types/timer'
import { useTimer } from '../hooks/useTimer'
import { useSoundEffects } from '../hooks/useSoundEffects'
import HiveDisplay from './HiveDisplay'
import TimerControls from './TimerControls'
import SessionSelector from './SessionSelector'
import ProgressTracker from './ProgressTracker'
import styles from './BuzzTimer.module.css'

const BuzzTimer: React.FC = () => {
  const [currentTimerType, setCurrentTimerType] = useState<TimerType>('work')
  const [completedSessions, setCompletedSessions] = useState(0)
  
  const {
    timeLeft,
    isRunning,
    timerState,
    startTimer,
    pauseTimer,
    resetTimer,
    switchTimer
  } = useTimer(currentTimerType)

  const { playBuzz, playChime, playSuccess } = useSoundEffects()

  // Handle timer completion
  useEffect(() => {
    if (timeLeft === 0 && timerState === TimerState.COMPLETED) {
      if (currentTimerType === 'work') {
        setCompletedSessions(prev => prev + 1)
        playSuccess()
        // Auto-switch to break after work session
        const nextBreak = completedSessions % 4 === 3 ? 'longBreak' : 'shortBreak'
        setTimeout(() => {
          setCurrentTimerType(nextBreak)
          switchTimer(nextBreak)
        }, 2000)
      } else {
        playChime()
        // Auto-switch back to work after break
        setTimeout(() => {
          setCurrentTimerType('work')
          switchTimer('work')
        }, 2000)
      }
    }
  }, [timeLeft, timerState, currentTimerType, completedSessions, playSuccess, playChime, switchTimer])

  const handleTimerTypeChange = (type: TimerType) => {
    setCurrentTimerType(type)
    switchTimer(type)
  }

  const handleReset = () => {
    resetTimer()
    setCompletedSessions(0)
  }

  return (
    <div className={styles.buzzTimer}>
      <div className={styles.timerContainer}>
        <HiveDisplay 
          timeLeft={timeLeft}
          timerType={currentTimerType}
          isRunning={isRunning}
          timerState={timerState}
        />
        
        <SessionSelector
          currentType={currentTimerType}
          onTypeChange={handleTimerTypeChange}
          isRunning={isRunning}
        />
        
        <TimerControls
          isRunning={isRunning}
          onStart={startTimer}
          onPause={pauseTimer}
          onReset={handleReset}
          onBuzz={playBuzz}
        />
        
        <ProgressTracker
          completedSessions={completedSessions}
        />
      </div>
    </div>
  )
}

export default BuzzTimer
