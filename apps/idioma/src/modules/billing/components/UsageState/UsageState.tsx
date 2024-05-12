/* @aztlan/generator-front 3.8.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  graphql, useFragment,
} from 'react-relay'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'usage-state'

const FRAGMENT = graphql`
  fragment UsageStateFragment on UsageStateNode {
    id
    periodStart
    periodEnd
    usedCharacters
    usedTokens
    usedExpressions
    leftoverCharacters
    leftoverTokens
    leftoverExpressions
    remainingCharacters
    remainingTokens
    remainingExpressions
    boardCount
    plan {
      id
      name
      maxCharacters
      maxTokens
      maxExpressions
      maxBoards
      version
    }
  }
`

/**
 * description
 * @param {InferProps<typeof UsageState.propTypes>} props -
 * @returns {React.ReactElement} - Rendered UsageState
 */
function UsageState({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof UsageState.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = useFragment(
    FRAGMENT, data,
  )

  const dataPoints = [
    {
      label    :'Characters',
      used     :result.usedCharacters,
      max      :result.plan.maxCharacters,
      remaining:result.remainingCharacters,
      leftover :result.leftoverCharacters,
    },
    {
      label    :'Tokens',
      used     :result.usedTokens,
      max      :result.plan.maxTokens,
      remaining:result.remainingTokens,
      leftover :result.leftoverTokens,
    },
    {
      label    :'Expressions',
      used     :result.usedExpressions,
      max      :result.plan.maxExpressions,
      remaining:result.remainingExpressions,
      leftover :result.leftoverExpressions,
    },
    {
      label    :'Boards',
      used     :result.boardCount,
      max      :result.plan.maxBoards,
      remaining:result.plan.maxBoards - result.boardCount,
      leftover :0,
    },
  ]

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <div className="container header grid">
        <div className="label md-span-2" />
        <div className="period md-span-3">
          <span>{result.periodStart}</span>
          <span>{' <> '}</span>
          <span>{result.periodEnd}</span>
        </div>
        <div className="leftover md-span-3">
          <span>Leftover</span>
        </div>
        <div className="remaining md-span-3">
          <span>Remaining</span>
        </div>
        <div className="max md-span-3">
          <span>{result.plan.name}</span>
          <span>
            {' '}
            v
            {result.plan.version}
          </span>
        </div>
      </div>
      {dataPoints.map((
        point, index,
      ) => (
        <div
          key={point.label}
          className="container grid"
        >
          <div className="label md-span-2">
            <span>{point.label}</span>
          </div>
          <div className="used md-span-3">
            <span>{point.used}</span>
          </div>
          <div className="leftover md-span-3">
            <span>{point.leftover || '-'}</span>
          </div>
          <div className="remaining md-span-3">
            <span>{point.remaining}</span>
          </div>
          <div className="max md-span-3">
            <span>{point.max}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

UsageState.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,
}

export default UsageState
