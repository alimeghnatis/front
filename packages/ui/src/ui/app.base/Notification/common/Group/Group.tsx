/* @aztlan/generator-front 3.8.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import useNotificationContext from '../../useNotificationContext.js'
import { Notification } from '../Notification/index.js'

const baseClassName = styleNames.base
const componentClassName = 'group'

/**
 * description
 * @param {InferProps<typeof Group.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Group
 */
function Group({
  id,
  className: userClassName,
  style,
  displayRemainingTime = false,
}: // ...otherProps

InferProps<typeof Group.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { notifications } = useNotificationContext()

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {notifications.map((notification) => (
        <Notification
          notificationId={notification.id}
          level={notification.level}
          created={notification.created}
          ttl={notification.ttl}
          key={notification.id}
          displayRemainingTime={displayRemainingTime}
        >
          {notification.content}
        </Notification>
      ))}
    </div>
  )
}

Group.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** Whether to display the remaining time for each notification */
  displayRemainingTime:PropTypes.bool,
}

export default Group
