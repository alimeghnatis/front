import { useContext } from 'react'
import Context from './Context.js'
import type { NotificationContextType } from './types.js'
/**
 * Custom hook to access the notification context.
 * Throws an error if the context is not provided.
 */
export default (): NotificationContextType => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useNotificationContext must be used within a NotificationProvider')
  }
  return context
}
