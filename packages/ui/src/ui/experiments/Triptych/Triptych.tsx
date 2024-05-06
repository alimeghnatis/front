/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import {
  useInsertionEffect,
  useReducer,
  useCallback,
  useMemo,
  useEffect,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import {
  useLocation, useHistory,
} from 'react-router-dom'
import Context from './Context.js'
import { SwitchRoutes } from '../../app.base/index.js'
import {
  useRouteMatch, RoutesConfig,
} from '../../common/index.js'

import reducer from './reducer.js'

const baseClassName = styleNames.base
const componentClassName = 'triptych'

/**
 * description
 * @param {InferProps<typeof Triptych.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Triptych
 */
function Triptych({
  id,
  className: userClassName,
  style,
  navigation,
  navigationSpan = 8,
  navigationSpanDesktop = 14,
  primaryRoutes,
  secondaryRoutes,
  secondarySpan = 8,
  secondarySpanDesktop = 14,
}: // ...otherProps

InferProps<typeof Triptych.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const matchPrimaryRoutes = useRouteMatch(primaryRoutes as RoutesConfig)

  const matchSecondaryRoutes = useRouteMatch(secondaryRoutes as RoutesConfig)

  const location = useLocation()

  const baseState = useMemo(
    () => {
      const secondaryMatch = matchSecondaryRoutes(location.pathname)

      if (secondaryMatch) {
        return {
          focus:2,
          match:secondaryMatch,
        }
      }
      const primaryMatch = matchPrimaryRoutes(location.pathname)

      return {
        focus:1,
        match:primaryMatch,
      }
    }, [location.pathname],
  )

  const [
    state,
    dispatch,
  ] = useReducer(
    reducer, {
      primaryRoutes,
      secondaryRoutes,
      ...baseState,
    },
  )

  const setState = useCallback(
    (payload) => {
      dispatch({
        type:'SET_STATE',
        payload,
      })
    }, [],
  )

  useEffect(
    () => {
      setState(baseState)
    }, [location.pathname],
  )

  const toggleNavigation = useCallback(
    () => {
      dispatch({ type: 'TOGGLE_NAV' })
    }, [],
  )

  const setFocus = useCallback(
    (focus) => {
      dispatch({
        type   :'SET_FOCUS',
        payload:focus,
      })
    }, [],
  )

  const history = useHistory()

  const reselectContent = useCallback(
    (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (state.focus === 2) {
        if (history.location.state?.from) {
          history.push(history.location.state.from)
        } else {
          history.goBack()
        }
      }
      setFocus(1)
    },
    [
      location.pathname,
      state.focus,
    ],
  )

  const value = useMemo(
    () => ({
      state,
      setState,
      setFocus,
      toggleNavigation,
    }),
    [state],
  )

  return (
    <Context.Provider value={value}>
      <div
        id={id}
        className={[
          baseClassName,
          componentClassName,
          userClassName,
          `focus-${state.focus}`,
        ]
          .filter((e) => e)
          .join(' ')}
        style={
          {
            ...style,
            '--focus'                  :state.focus,
            '--navigation-span'        :navigationSpan,
            '--navigation-span-desktop':navigationSpanDesktop,
            '--secondary-span'         :secondarySpan,
            '--secondary-span-desktop' :secondarySpanDesktop,
          } as React.CSSProperties
        }
        // {...otherProps}
      >
        <div
          className={[
            'navigation',
            'manual',
            `span-${navigationSpan}`,
            `md-span-${navigationSpanDesktop}`,
          ].join(' ')}
        >
          {navigation}
        </div>

        <div
          className="content manual span-8 md-span-14"
          onClick={state.focus !== 1 ? reselectContent : undefined}
        >
          <SwitchRoutes items={primaryRoutes} />
        </div>
        <div
          className={[
            'secondary',
            'manual',
            `span-${secondarySpan}`,
            `md-span-${secondarySpanDesktop}`,
          ].join(' ')}
        >
          <SwitchRoutes items={secondaryRoutes} />
        </div>
      </div>
    </Context.Provider>
  )
}

Triptych.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The navigation component */
  navigation:PropTypes.node,

  /** The navigation span */
  navigationSpan:PropTypes.number,

  /** The navigation span for desktop */
  navigationSpanDesktop:PropTypes.number,

  /** The main routes */
  primaryRoutes:PropTypes.arrayOf(PropTypes.object).isRequired,

  /** The secondary routes */
  secondaryRoutes:PropTypes.arrayOf(PropTypes.object).isRequired,

  /** The secondary span */
  secondarySpan:PropTypes.number,

  /** The secondary span for desktop */
  secondarySpanDesktop:PropTypes.number,
}

export default Triptych
