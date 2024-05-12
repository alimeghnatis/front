/* @aztlan/generator-front 3.8.0 */
import * as React from 'react'
import {
  useReducer, useCallback,
  useMemo,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import Context from './Context.js'
import type {
  NotificationObject, NotificationContextType,
} from './types.js'
import { NotificationLevel } from './types.js'
import reducer from './reducer.js'

const DEFAULT_TTLS: { [key in NotificationLevel]: number } = {
  [NotificationLevel.SUCCESS]:5000,
  [NotificationLevel.WARNING]:10000,
  [NotificationLevel.ERROR]  :30000,
}

/**
 * description
 * @param {InferProps<typeof Provider.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Provider
 */
function Provider({
  children,
  initialNotifications = [],

  // ...otherProps

}: InferProps<typeof Provider.propTypes>): React.ReactElement {
  const [
    notifications,
    dispatch,
  ] = useReducer<React.Reducer<
  NotificationObject[], { type: string, payload: any }
  >>(
    reducer, initialNotifications as NotificationObject[],
  )

  /**
   * Adds a notification with a specified level and content.
   *
   * @param level The notification level (success, warning, or error).
   * @param content The content of the notification.
   * @param ttl Optional time-to-live duration for the notification in milliseconds.
   */
  const addNotification = useCallback(
    (
      level: NotificationLevel, content: React.ReactNode, ttl?: number,
    ) => {
      const notification: NotificationObject = {
        id:Math.random().toString(36).substr(
          2, 9,
        ),
        level,
        content,
        created:new Date(),
        ttl    :typeof ttl === 'undefined' ? DEFAULT_TTLS[level] : Number(ttl),
      }

      // Dispatch the ADD_NOTIFICATION action
      dispatch({
        type   :'ADD_NOTIFICATION',
        payload:notification,
      })

      // Set up the timer to automatically remove this notification after its TTL

      if (notification.ttl) {
        setTimeout(
          () => {
            dispatch({
              type   :'REMOVE_NOTIFICATION',
              payload:notification.id,
            })
          }, notification.ttl,
        )
      }
    }, [dispatch],
  )

  /**
   * Removes a notification by its ID.
   *
   * @param id The ID of the notification to be removed.
   */
  const removeNotification = useCallback(

    (id: string) => {
      dispatch({
        type   :'REMOVE_NOTIFICATION',
        payload:id,
      })
    },
    [dispatch],
  )

  /**
   * Object containing specialized notification actions for error, warning, and success.
   */
  const notify = useMemo(
    () => ({
    /**
     * Adds an error notification.
     *
     * @param content The content of the notification.
     * @param ttl Optional time-to-live duration for the notification in milliseconds.
     */
      error:(
        content: React.ReactNode, ttl?: number,
      ) => addNotification(
        NotificationLevel.ERROR, content, ttl,
      ),

      /**
     * Adds a warning notification.
     *
     * @param content The content of the notification.
     * @param ttl Optional time-to-live duration for the notification in milliseconds.
     */
      warning:(
        content: React.ReactNode, ttl?: number,
      ) => addNotification(
        NotificationLevel.WARNING, content, ttl,
      ),

      /**
     * Adds a success notification.
     *
     * @param content The content of the notification.
     * @param ttl Optional time-to-live duration for the notification in milliseconds.
     */
      success:(
        content: React.ReactNode, ttl?: number,
      ) => addNotification(
        NotificationLevel.SUCCESS, content, ttl,
      ),
    }), [addNotification],
  )

  const value: NotificationContextType = useMemo(
    () => ({
      notifications,
      removeNotification,
      notify,
    }), [
      notifications,
      removeNotification,
      notify,
    ],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

Provider.propTypes = {

  /** The children JSX */
  children:PropTypes.node,

  /** The initial notifications to display */
  initialNotifications:PropTypes.arrayOf(PropTypes.shape({
    id     :PropTypes.string,
    level  :PropTypes.oneOf(Object.values(NotificationLevel)),
    content:PropTypes.node.isRequired,
    created:PropTypes.instanceOf(Date),
    ttl    :PropTypes.number,
  })),

}

export default Provider
