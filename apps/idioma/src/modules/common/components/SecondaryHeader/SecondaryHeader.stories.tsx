/* @aztlan/generator-front 3.6.3 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import Component from './SecondaryHeader.js'
// import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";

const meta: Meta<typeof Component> = {
  title    :'base.navigation/SecondaryHeader',
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

export const Base: StoryObj<typeof Component> = { args: { children: 'Sample Header' } }

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample Header</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <Header {...args} />

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
} */
