/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  DateTime, PrefetchLink, useApplicationContext,
} from '@aztlan/ui'
import * as paths from 'modules/paths'
import { Link } from 'react-router-dom'

import {
  graphql, useFragment,
} from 'react-relay'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'board-card'

const FRAGMENT = graphql`
  fragment BoardCardFragment on BoardNode {
    id
    name
    description
    created
    groups {
      count
    }
    expressions {
      count
    }
  }
`

/**
 * description
 * @param {InferProps<typeof BoardCard.propTypes>} props -
 * @returns {React.ReactElement} - Rendered BoardCard
 */
function BoardCard({
  id,
  className: userClassName,
  style,
  data,
  color = 'near',
}: // ...otherProps

InferProps<typeof BoardCard.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  const { matchRoute } = useApplicationContext()
  const LinkType = matchRoute ? PrefetchLink : Link

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
        color,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <p className="h3">
        <LinkType
          to={paths.board.generatePath(
            'BOARD_HOME', { board: result.id },
          )}
          key={result.id}
        >
          {result.name}
        </LinkType>
      </p>
      {result.description && (
        <p className="color metadata">
          {' '}
          {result.description}
        </p>
      )}
      <p>
        {result.expressions?.count
          ? `${result.expressions.count} Expressions in ${result.groups.count} Groups`
          : 'This board is empty'}
      </p>
      <p>
        {'Created on '}
        <DateTime
          iso={result.created}
          format="date"
        />
      </p>
    </div>
  )
}

BoardCard.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The relay data to use for the component fragment */
  data:PropTypes.any,

  /** The color of the card */
  color:PropTypes.string,
}

export default BoardCard
