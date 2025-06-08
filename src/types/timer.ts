export type TimerType = 'work' | 'shortBreak' | 'longBreak'

export const TimerState = {
  IDLE: 'idle',
  RUNNING: 'running',
  PAUSED: 'paused',
  COMPLETED: 'completed'
} as const

export type TimerStateType = typeof TimerState[keyof typeof TimerState]

export interface TimerConfig {
  work: number
  shortBreak: number
  longBreak: number
}

export interface TimerHookReturn {
  timeLeft: number
  isRunning: boolean
  timerState: TimerStateType
  startTimer: () => void
  pauseTimer: () => void
  resetTimer: () => void
  switchTimer: (type: TimerType) => void
}

export interface SoundEffectsHookReturn {
  playBuzz: () => void
  playChime: () => void
  playSuccess: () => void
}
