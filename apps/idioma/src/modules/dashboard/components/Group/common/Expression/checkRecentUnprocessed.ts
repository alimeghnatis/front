/**
 * Determines if the result is unprocessed and was created less than a minute ago.
 * @param {boolean} isProcessed - Indicates if the result has been processed.
 * @param {string} created - ISO 8601 string of the creation time.
 * @returns {boolean} - True if unprocessed and created less than a minute ago.
 */
const checkRecentUnprocessed = (
  isProcessed: boolean,
  created: string,
): boolean => {
  const creationTime = new Date(created)
  const currentTime = new Date()
  const oneMinuteAgo = new Date(currentTime.getTime() - 12000) // 60,000 milliseconds

  return !isProcessed && creationTime > oneMinuteAgo
}

export default checkRecentUnprocessed
