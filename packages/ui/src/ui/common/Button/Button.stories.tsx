/* @aztlan/generator-front 3.8.3 */
import * as React from 'react'

import {
  Meta, StoryObj, StoryFn,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import { THEME } from 'style-guide/helpers.js'
import Component from './Button.js'

// import { decorators } from 'story-utils'
const allColors = [
  undefined,
  ...THEME,
]

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

const ButtonTemplate: StoryFn<typeof Component> = (args) => THEME.map((color) => (
  <Component
    color={color}
    {...args}
    key={color}
  />
))

export const Base: StoryFn<typeof Component> = ButtonTemplate.bind({})
Base.args = { children: 'Sample Button' }

export const Disabled: StoryFn<typeof Component> = ButtonTemplate.bind({})
Disabled.args = {
  children:'Disabled Button',
  disabled:true,
}

export const VariantBorderless: StoryFn<typeof Component> = ButtonTemplate.bind({})
VariantBorderless.args = {
  children:'Borderless Button',
  variant :'borderless',
}

export const VariantBorderlessDisabled: StoryFn<typeof Component> = ButtonTemplate.bind({})
VariantBorderlessDisabled.args = {
  ...VariantBorderless.args,
  disabled:true,
}

export const VariantSimple: StoryFn<typeof Component> = ButtonTemplate.bind({})
VariantSimple.args = {
  children:'< Go back',
  variant :'simple',
}

export const VariantSimpleDisabled: StoryFn<typeof Component> = ButtonTemplate.bind({})
VariantSimpleDisabled.args = {
  ...VariantSimple.args,
  disabled:true,
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

/* Unsure if this combination should exist
export const VariantNaturalDisabled: StoryFn<typeof Component> = VariantNatural.bind({})
VariantNaturalDisabled.args = { disabled: true }
*/

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
