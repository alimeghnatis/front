/* @aztlan/generator-front 3.8.0 */
import * as React from 'react'
import {
  useInsertionEffect, useState, useEffect,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { useRemainingTime } from '@aztlan/react-hooks'
import styleNames from '@aztlan/bem'

import useNotificationContext from '../../useNotificationContext.js'

const baseClassName = styleNames.base
const componentClassName = 'notification'

/**
 * description
 * @param {InferProps<typeof Notification.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Notification
 */
function Notification({
  id,
  className: userClassName,
  style,
  children,
  notificationId,
  level,
  created,
  ttl,
  displayRemainingTime,
}: // ...otherProps

InferProps<typeof Notification.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { removeNotification } = useNotificationContext()

  const capitalizedLevel = level.charAt(0).toUpperCase() + level.slice(1)

  const secondsLeft = useRemainingTime(
    created as Date, ttl,
  )

  return (
    <div
      id={id || `notification-${notificationId}`}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        styleNames[`modifier${capitalizedLevel}`],
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      onClick={() => removeNotification(notificationId)}
    >
      <div>{children}</div>
      {ttl && ttl > 0
        ? displayRemainingTime && (
        <div>
          <p>
            Will disappear in
            {Math.ceil(secondsLeft / 1000)}
          </p>
        </div>
        )
        : null}
    </div>
  )
}

Notification.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The notification id */
  notificationId:PropTypes.string,

  /** The notification level */
  level:PropTypes.oneOf([
    'warning',
    'error',
    'success',
  ]),

  /** The notification creation date */
  created:PropTypes.object,

  /** The notification time to live */
  ttl:PropTypes.number,

  /** Whether to display the remaining time for the notification */
  displayRemainingTime:PropTypes.bool,
}

const areEqual = (
  prevProps, nextProps,
) => prevProps.notificationId === nextProps.notificationId

export default React.memo(
  Notification, areEqual,
)
