import {
  useState, useEffect,
} from 'react'

/**
 * Custom hook to calculate and update the remaining time for a notification.
 *
 * @param {Date} created - The creation date object of the notification.
 * @param {number} ttl - The time-to-live (TTL) for the notification in milliseconds.
 * @returns {number} - The remaining time in milliseconds.
 */
const useRemainingTime = (
  created: Date, ttl: number,
): number => {
  const [
    remainingTime,
    setRemainingTime,
  ] = useState(() => {
    const currentTime = Date.now()
    const createdTime = created.getTime()
    return Math.max(
      0, createdTime + ttl - currentTime,
    )
  })

  useEffect(
    () => {
      const timerId = setInterval(
        () => {
          const currentTime = Date.now()
          const createdTime = created.getTime()
          const newRemainingTime = Math.max(
            0, createdTime + ttl - currentTime,
          )
          setRemainingTime(newRemainingTime)

          // Stop the interval when time expires
          if (newRemainingTime <= 0) {
            clearInterval(timerId)
          }
        }, 1000,
      )

      return () => clearInterval(timerId)
    }, [
      created,
      ttl,
    ],
  )

  return remainingTime
}

export default useRemainingTime
