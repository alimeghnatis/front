/* @aztlan/generator-front 3.9.0 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './Toggle.js'

const meta: Meta<typeof Component> = {
  title     :'form/inputs/Toggle',
  component :Component,
  decorators:[
    decorators.components.Grid,
    decorators.components.Form,
  ],
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    name       :'opt-in',
    label      :'Sign up for newsletter',
    description:'Do you wish to receive our newsletter? It will only be sent on rare occasions.',
  },
}

export const Disabled: StoryObj<typeof Component> = {
  args:{
    name       :'beta',
    label      :'Register for beta testing',
    description:'This feature is not yet available',
    disabled   :true,
  },
}

export const CustomLabels: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    labelYes:'Sure!',
    labelNo :'No, thanks',
  },
}
