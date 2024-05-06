/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useFragment, graphql,
} from 'react-relay'
import styleNames from '@aztlan/bem'
import { Thread } from '../Thread/index.js'
import {
  ActionsBar, CreateForm,
} from './common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'chat'

const FRAGMENT = graphql`
  fragment ChatFragment on BoardNode {
    id
    openaiThreadId
    thread {
      ...ThreadFragment
      ...ActionsBarFragment
    }
    ...CreateFormFragment
  }
`

/**
 * description
 * @param {InferProps<typeof Chat.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Chat
 */
function Chat({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof Chat.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = useFragment(
    FRAGMENT, data,
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <ActionsBar data={result.thread} />
      {result.thread ? (
        <Thread data={result.thread} />
      ) : (
        <div style={{ flexGrow: 1 }}>
          <strong>The chat is not enabled for this board yet.</strong>
        </div>
      )}
      <CreateForm data={result} />
    </div>
  )
}

Chat.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data for this element */
  data:PropTypes.object.isRequired,
}

export default Chat
