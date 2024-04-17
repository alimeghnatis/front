/* @aztlan/generator-front 3.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import Component from './BoardCreateForm.js'
// import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
// import decorators from "story-utils/decorators.js";
import decorators from '../../../../decorators.js'

const meta: Meta<typeof Component> = {
  title     :'modules/dashboard/BoardForm/BoardCreateForm',
  component :Component,
  decorators:[decorators.components.Relay],
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
