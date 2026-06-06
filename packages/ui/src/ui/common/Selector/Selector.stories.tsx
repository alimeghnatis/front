/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'

import {
  Meta, StoryFn,
} from '@storybook/react'
import Component from './Selector.js'
// import { decorators } from 'story-utils'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'common/Selector',
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

const Template: StoryFn<typeof Component> = ({
  // @ts-ignore
  initialValue,
  ...args
}) => {
  const [
    value,
    setValue,
  ] = React.useState(initialValue)

  return (
    <Component
      {...args}
      value={value}
      setValue={setValue}
    />
  )
}

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  options:[
    {
      value:'chat',
      label:'Chat',
    },
    {
      value:'board',
      label:'Board Main Page',
      color:'important',
    },
    {
      value:'settings',
      label:'Settings',
    },
  ],
  // @ts-ignore
  initialValue:'board',
}

export const DisabledValue: StoryFn<typeof Component> = Template.bind({})
DisabledValue.args = {
  ...Base.args,
  options:[
    ...Base.args.options,
    {
      value   :'disabled',
      label   :'Disabled',
      disabled:true,
    },
  ],
}
