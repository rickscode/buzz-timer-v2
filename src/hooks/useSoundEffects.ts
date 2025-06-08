import { useCallback, useRef } from 'react'
import type { SoundEffectsHookReturn } from '../types/timer'

export const useSoundEffects = (): SoundEffectsHookReturn => {
  const audioContextRef = useRef<AudioContext | null>(null)

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    }
    return audioContextRef.current
  }, [])

  const createBuzzSound = useCallback((frequency: number, duration: number) => {
    const audioContext = getAudioContext()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)
    oscillator.type = 'sawtooth'

    gainNode.gain.setValueAtTime(0, audioContext.currentTime)
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + duration)
  }, [getAudioContext])

  const createChimeSound = useCallback((frequencies: number[], duration: number) => {
    frequencies.forEach((freq, index) => {
      setTimeout(() => {
        createBuzzSound(freq, duration * 0.8)
      }, index * 100)
    })
  }, [createBuzzSound])

  const playBuzz = useCallback(() => {
    // Bee buzzing sound - rapid frequency changes
    const buzzPattern = [220, 240, 220, 260, 220, 280]
    buzzPattern.forEach((freq, index) => {
      setTimeout(() => {
        createBuzzSound(freq, 0.1)
      }, index * 50)
    })
  }, [createBuzzSound])

  const playChime = useCallback(() => {
    // Pleasant chime for break completion
    const chimeFreqs = [523.25, 659.25, 783.99] // C5, E5, G5
    createChimeSound(chimeFreqs, 0.5)
  }, [createChimeSound])

  const playSuccess = useCallback(() => {
    // Success sound for work session completion
    const successFreqs = [523.25, 659.25, 783.99, 1046.5] // C5, E5, G5, C6
    createChimeSound(successFreqs, 0.3)
  }, [createChimeSound])

  return {
    playBuzz,
    playChime,
    playSuccess
  }
}
