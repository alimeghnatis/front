const SECONDS = 10

/**
 * Determines if the result is unprocessed and was created less than X seconds ago.
 * @param {boolean} isProcessed - Indicates if the result has been processed.
 * @param {string} created - ISO 8601 string of the creation time.
 * @returns {boolean} - True if unprocessed and created less than X seconds ago.
 */
const checkRecentUnprocessed = (
  isProcessed: boolean,
  created: string,
): boolean => {
  const creationTime = new Date(created)
  const currentTime = new Date()
  const oneMinuteAgo = new Date(currentTime.getTime() - SECONDS * 1000)

  return !isProcessed && creationTime > oneMinuteAgo
  // return creationTime > oneMinuteAgo
}

export default checkRecentUnprocessed
