/* @aztlan/generator-front 3.6.3 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { decorators } from 'story-utils'
import Component from './Header.js'

const meta: Meta<typeof Component> = {
  title     :'common/navigation/Header',
  component :Component,
  decorators:[decorators.components.Router],
  parameters:{ layout: 'fullscreen' },
}

export default meta

export const Base: StoryObj<typeof Component> = { args: { children: 'Sample Header' } }
