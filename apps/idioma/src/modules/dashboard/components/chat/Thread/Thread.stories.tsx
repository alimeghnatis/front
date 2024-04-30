/* @aztlan/generator-front 3.6.3 */
//import * as React from 'react'

import { Meta, StoryObj } from "@storybook/react";
//import { Meta, StoryFn } from '@storybook/react'
import Component from "./Thread.js";
//import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
//import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title: "modules/dashboard/chat/Thread",
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
    children: "Sample Thread"
  }
};

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample Thread</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <Thread {...args} />
                                                     
export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
}*/
