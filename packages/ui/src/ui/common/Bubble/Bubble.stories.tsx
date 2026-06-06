/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'

import {
  Meta, StoryObj, StoryFn,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import Component from './Bubble.js'

// import { decorators } from 'story-utils'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'common/Bubble',
  component:Component,
  /*
  decorators: [
    //decorators.app,
    //storyfn => <div className="">{ storyfn() }</div>,
  ]
  argTypes: {
    backgroundColor: { control: "color" }
  }
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
}

export default meta

export const Base: StoryObj<typeof Component> = { args: { children: 'Sample Bubble' } }

export const InSpan: StoryFn<typeof Component> = (args) => (
  <span>
    {'This is a span of text with a bubble: '}
    {' '}
    <Component {...args} />
  </span>
)
InSpan.args = {
  children:'Outside link',
  color   :'success',
}

export const Alert: StoryFn<typeof Component> = (args) => (
  <span>
    {'You have '}
    <Component {...args} />
    {' unread messages'}
  </span>
)
Alert.args = {
  color   :'new',
  children:'3',
}

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample Bubble</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <Component {...args} />

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
} */
