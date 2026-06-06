/* @aztlan/generator-front 3.9.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import Component from './DateTime.js'

// import { decorators } from 'story-utils'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'common/DateTime',
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

export const Base: StoryObj<typeof Component> = { args: { iso: '2021-09-01T12:32:12Z' } }

export const DateTime: StoryObj<typeof Component> = { args: { iso: '2024-05-16T15:02:06.276943+00:00' } }

export const Date: StoryObj<typeof Component> = { args: { iso: '2024-05-16T15:02:06.276943+00:00' } }

export const Time: StoryObj<typeof Component> = { args: { iso: '2024-05-16T15:02:06.276943+00:00' } }

export const Override: StoryObj<typeof Component> = {
  args:{
    iso           :'2024-05-16T15:02:06.276943+00:00',
    formatOverride:'yyyy-MM-dd HH:mm:ss.SSSSSS',
  },
}
