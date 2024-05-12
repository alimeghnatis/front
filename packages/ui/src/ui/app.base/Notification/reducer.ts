import type {
  NotificationObject, NotificationAction,
} from './types.js'

/**
 * Reducer function for managing notifications.
 *
 * @param state The current state of notifications.
 * @param action The action to be performed on the notifications state.
 * @returns The updated state after the action is applied.
 */
const reducer = (
  state: NotificationObject[],
  action: NotificationAction,
): NotificationObject[] => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [
        ...state,
        action.payload,
      ]
    case 'REMOVE_NOTIFICATION':
      return state.filter((notification) => notification.id !== action.payload)
    default:
      // @ts-ignore
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default reducer
