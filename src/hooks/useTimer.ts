import { useState, useEffect, useCallback, useRef } from 'react'
import type { TimerType, TimerConfig, TimerHookReturn, TimerStateType } from '../types/timer'
import { TimerState } from '../types/timer'

const TIMER_CONFIG: TimerConfig = {
  work: 25 * 60, // 25 minutes
  shortBreak: 5 * 60, // 5 minutes
  longBreak: 15 * 60 // 15 minutes
}

export const useTimer = (initialType: TimerType = 'work'): TimerHookReturn => {
  const [currentType, setCurrentType] = useState<TimerType>(initialType)
  const [timeLeft, setTimeLeft] = useState<number>(TIMER_CONFIG[initialType])
  const [timerState, setTimerState] = useState<TimerStateType>(TimerState.IDLE)
  const intervalRef = useRef<number | null>(null)

  const isRunning = timerState === TimerState.RUNNING

  const startTimer = useCallback(() => {
    setTimerState(TimerState.RUNNING)
  }, [])

  const pauseTimer = useCallback(() => {
    setTimerState(TimerState.PAUSED)
  }, [])

  const resetTimer = useCallback(() => {
    setTimerState(TimerState.IDLE)
    setTimeLeft(TIMER_CONFIG[currentType])
  }, [currentType])

  const switchTimer = useCallback((type: TimerType) => {
    setCurrentType(type)
    setTimeLeft(TIMER_CONFIG[type])
    setTimerState(TimerState.IDLE)
  }, [])

  // Timer countdown effect
  useEffect(() => {
    if (timerState === TimerState.RUNNING) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setTimerState(TimerState.COMPLETED)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [timerState])

  // Reset when timer type changes
  useEffect(() => {
    setTimeLeft(TIMER_CONFIG[currentType])
    if (timerState !== TimerState.RUNNING) {
      setTimerState(TimerState.IDLE)
    }
  }, [currentType, timerState])

  return {
    timeLeft,
    isRunning,
    timerState,
    startTimer,
    pauseTimer,
    resetTimer,
    switchTimer
  }
}
