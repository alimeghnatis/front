/* @aztlan/generator-front 3.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import { decorators } from 'story-utils'
import { RawBoardCreateForm as Component } from './BoardCreateForm.js'

const meta: Meta<typeof Component> = {
  title     :'modules/dashboard/BoardForm/BoardCreateForm',
  component :Component,
  decorators:[
    decorators.components.Relay,
    decorators.components.Router,
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

export const Base: StoryObj<typeof Component> = {
  args      :{},
  parameters:{},
}
