/**
 * Formats time in seconds to MM:SS format
 * @param timeInSeconds - Time in seconds
 * @returns Formatted time string (MM:SS)
 */
export const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60)
  const seconds = timeInSeconds % 60
  
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

/**
 * Converts minutes to seconds
 * @param minutes - Time in minutes
 * @returns Time in seconds
 */
export const minutesToSeconds = (minutes: number): number => {
  return minutes * 60
}

/**
 * Converts seconds to minutes (rounded)
 * @param seconds - Time in seconds
 * @returns Time in minutes
 */
export const secondsToMinutes = (seconds: number): number => {
  return Math.round(seconds / 60)
}
