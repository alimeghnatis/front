/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'

import { useBoardMemberships } from 'modules/common/components'
import BoardCard from './BoardCard.js'

const baseClassName = styleNames.base
const componentClassName = 'board-card-group'

/**
 * description
 * @param {InferProps<typeof RawGroup.propTypes>} props -
 * @returns {React.ReactElement} - Rendered RawGroup
 */
function RawGroup({
  id,
  className: userClassName,
  style,
  cardSpan = 4,
  cardSpanDesktop = 4,
  data,
}: // ...otherProps

InferProps<typeof RawGroup.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = data

  const boardMemberships = result?.edges || {}

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <div className="container">
        <p>{`You are a member of ${result.count} boards.`}</p>
      </div>
      {boardMemberships.map((boardMembership) => (
        <BoardCard
          key={boardMembership.node.id}
          data={boardMembership.node.board}
          className={[
            `span-${cardSpan}`,
            `md-span-${cardSpanDesktop}`,
          ]
            .filter(Boolean)
            .join(' ')}
        />
      ))}
    </div>
  )
}

RawGroup.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The relay data to use for the component fragment */
  data:PropTypes.any,
}

export { RawGroup }

function MembershipsGroup(props) {
  const result = useBoardMemberships()
  return (
    <RawGroup
      data={result}
      {...props}
    />
  )
}

export default MembershipsGroup
