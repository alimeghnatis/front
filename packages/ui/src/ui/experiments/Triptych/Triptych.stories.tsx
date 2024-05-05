/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import { Link } from 'react-router-dom'
import * as PropTypes from 'prop-types'
import Component from './Triptych.js'
import useTriptychContext from './useTriptychContext.js'
// import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";

const meta: Meta<typeof Component> = {
  title     :'experiments/Triptych',
  component :Component,
  parameters:{ layout: 'fullscreen' },
  decorators:[decorators.components.Router],
  /*
  decorators: [
    //decorators.app,
    //storyfn => <div className="">{ storyfn() }</div>,
  ]
  argTypes: {
    backgroundColor: { control: "color" }
  } */
}

export default meta

function MiniMenu() {
  const { toggleNavigation } = useTriptychContext()

  return (
    <div
      className=""
      style={{
        display      :'flex',
        flexDirection:'column',
      }}
    >
      <button onClick={toggleNavigation}>Close Menu</button>
      <Link to="/">Home</Link>
      <Link to="/main-route-1">Main Route 1</Link>
      <Link to="/main-route-2">Main Route 2</Link>
      <Link to="/main-route-3">Main Route 3</Link>
      <Link to="/main-route-4">Main Route 4</Link>
      <Link to="/main-route-5">Main Route 5</Link>
    </div>
  )
}

function Page({
  title, secondary = undefined, primary = undefined,
}) {
  const { toggleNavigation } = useTriptychContext()

  return (
    <div
      style={{
        background:primary ? 'lightblue' : 'lightgreen',
        height    :'100%',
      }}
    >
      {secondary && (
        <button
          onClick={toggleNavigation}
          type="button"
        >
          Open Menu
        </button>
      )}
      {primary && <Link to={primary}>Primary</Link>}
      <h1>
        Page
        {title}
      </h1>
      {secondary && <Link to={secondary}>Help</Link>}
    </div>
  )
}

Page.propTypes = {
  title    :PropTypes.string.isRequired,
  primary  :PropTypes.string,
  secondary:PropTypes.string,
}

export const Base: StoryObj<typeof Component> = {
  args:{
    navigation   :<MiniMenu />,
    primaryRoutes:[
      {
        path:[
          '/main-route-1*',
          '/main-route-2*',
        ],
        component:() => (
          <Page
            title="B"
            secondary="/main-route-1/help"
          />
        ),
      },
      {
        path:[
          '/main-route-4*',
          '/main-route-5*',
        ],
        component:() => (
          <Page
            title="C"
            secondary="/main-route-4/help"
          />
        ),
      },
      {
        path     :'/*',
        component:() => (
          <Page
            title="A"
            secondary="/help"
          />
        ),
      },
    ],
    secondaryRoutes:[
      {
        path     :'/help',
        component:() => (
          <Page
            title="help"
            primary="/"
          />
        ),
      },
      {
        path:[
          '/main-route-1/help',
          '/main-route-2/settings',
        ],
        component:() => (
          <Page
            title="settings"
            primary="/main-route-1"
          />
        ),
      },
      {
        path:[
          '/main-route-4/help',
          '/main-route-5/settings',
        ],
        component:() => (
          <Page
            title="settings"
            primary="/main-route-4"
          />
        ),
      },
    ],
  },
}

export const CustomWidth: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    navigationSpan       :6,
    navigationSpanDesktop:10,
    secondarySpan        :4,
    secondarySpanDesktop :10,
  },
}
