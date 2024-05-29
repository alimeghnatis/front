/* @aztlan/generator-front 3.9.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './ToggleBreadcrumb.js'

const meta: Meta<typeof Component> = {
  title     :'common/Navigation/MegaMenu/ToggleBreadcrumb',
  component :Component,
  decorators:[decorators.components.Router],
  /*
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    getToggleButtonProps:() => ({}),
    selectedItems       :[
      {
        label:'Navigation',
        url  :'/nav',
      },
      {
        label:'Settings',
        url  :'/settings',
      },
      {
        label:'Profile',
        url  :'/profile',
      },
    ],
  },
}
