/* @aztlan/generator-front 3.6.3 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { decorators } from 'story-utils'
import Component from './ActionsBar.js'

const meta: Meta<typeof Component> = {
  title     :'dashboard/chat/Chat/ActionsBar',
  component :Component,
  decorators:[decorators.components.Relay],
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

export const Base: StoryObj<typeof Component> = { args: { children: 'Sample ActionsBar' } }

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample ActionsBar</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <ActionsBar {...args} />

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
} */
