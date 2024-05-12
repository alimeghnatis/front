/* @aztlan/generator-front 3.8.0 */
//import * as React from 'react'

import { Meta, StoryObj } from "@storybook/react";
//import { Meta, StoryFn } from '@storybook/react'
import Component from "./Notification.js";

// import { decorators } from 'story-utils'
//import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title: "app.base/Notification/Notification",
  component: Component
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
  },*/
};

export default meta;



export const Base: StoryObj<typeof Component> = {
  args: {
    children: "Sample Notification"
  }
  
};

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample Notification</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <Notification {...args} />
                                                     
export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
}*/
