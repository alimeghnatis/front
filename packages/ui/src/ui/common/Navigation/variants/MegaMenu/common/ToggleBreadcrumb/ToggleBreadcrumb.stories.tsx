/* @aztlan/generator-front 3.9.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import Component from './ToggleBreadcrumb.js'

// import { decorators } from 'story-utils'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'common/Navigation/MegaMenu/ToggleBreadcrumb',
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

export const Base: StoryObj<typeof Component> = { args: { children: 'Sample ToggleBreadcrumb' } }

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample ToggleBreadcrumb</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <Component {...args} />

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
} */
