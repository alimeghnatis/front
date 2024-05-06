/* @aztlan/generator-front 3.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import { decorators } from 'story-utils'
import Component from './Group.js'

const meta: Meta<typeof Component> = {
  title     :'modules/dashboard/Board/Group',
  component :Component,
  decorators:[decorators.components.Router],
  parameters:{ layout: 'fullscreen' },
  /*
  argTypes: {
    backgroundColor: { control: "color" }
  } */
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    style   :{ background: 'red' },
    children:'Some test',
  },
}
