/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  parseISO, format,
} from 'date-fns'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'date-time'

/**
 * Function to format the ISO date string into a readable format.
 * @param {string} isoString - The ISO date string to format.
 * @returns {string} - The formatted date string.
 */
function formatReadable(
  isoString: string, formatTokens: string,
): string {
  // Parse the ISO string into a Date object
  const date = parseISO(isoString)

  // Format the date into a readable string
  return format(
    date, formatTokens,
  )
}

const formatMap = {
  date    :'MM/dd/yyyy',
  time    :'hh:mm a',
  datetime:'MM/dd/yyyy hh:mm a',
}

/**
 * description
 * @param {InferProps<typeof DateTime.propTypes>} props -
 * @returns {React.ReactElement} - Rendered DateTime
 */
function DateTime({
  id,
  className: userClassName,
  style,
  iso,
  format: userFormat = 'datetime',
  formatOverride,
}: // ...otherProps

InferProps<typeof DateTime.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const formattedDateTime = formatReadable(
    iso,
    formatOverride || formatMap[userFormat],
  )

  return (
    <span
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
      {formattedDateTime}
    </span>
  )
}

DateTime.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The ISO date string to format */
  iso:PropTypes.string.isRequired,

  /** The format to use for the date */
  format:PropTypes.oneOf(Object.keys(formatMap)),

  /** The format to use for the date */
  formatOverride:PropTypes.string,
}

export default React.memo(
  DateTime,
  (
    prevProps, nextProps,
  ) => prevProps.iso === nextProps.iso,
)
