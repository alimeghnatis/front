/* @aztlan/generator-front 3.6.3 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { decorators } from 'story-utils'
import { RawVerticalMenu as Component } from './VerticalMenu.js'

const meta: Meta<typeof Component> = {
  title     :'common/navigation/VerticalMenu',
  component :Component,
  decorators:[
    decorators.components.Application,
    decorators.components.Router,
    decorators.components.Relay,
  ],
  /*
  argTypes: {
    backgroundColor: { control: "color" }
  }
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
}

export default meta

export const Base: StoryObj<typeof Component> = { args: { children: 'Sample VerticalMenu' } }
