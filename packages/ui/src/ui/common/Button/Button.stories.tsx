/* @aztlan/generator-front 3.8.3 */
import * as React from 'react'

import {
  Meta, StoryObj, StoryFn,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './Button.js'

// import { decorators } from 'story-utils'

const meta: Meta<typeof Component> = {
  title     :'common/Button',
  component :Component,
  decorators:[decorators.components.Router],
  parameters:{ layout: 'centered' },
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

export const Base: StoryObj<typeof Component> = { args: { children: 'Sample Button' } }

export const VariantSimple: StoryObj<typeof Component> = {
  args:{
    children:'< Go back',
    variant :'simple',
  },
}

export const VariantNatural: StoryFn<typeof Component> = (args) => (
  <span>
    This is a span of text
    {' '}
    <strong>
      with a
      {' '}
      <Component
        variant="natural"
        {...args}
      >
        button
      </Component>
    </strong>
  </span>
)

export const Disabled: StoryObj<typeof Component> = {
  args:{
    children:'Disabled Button',
    disabled:true,
  },
}

export const AsAnchor: StoryObj<typeof Component> = {
  args:{
    as      :'a',
    href    :'#',
    children:'Open in new tab',
  },
}

const GroupTemplate: StoryFn<typeof Component.Group> = (args) => (
  <Component.Group {...args} />
)

export const Group: StoryFn<typeof Component> = GroupTemplate.bind({})
Group.args = {
  children:(
    <>
      <Component>Button 1</Component>
      <Component>Button 2</Component>
    </>
  ),
}
