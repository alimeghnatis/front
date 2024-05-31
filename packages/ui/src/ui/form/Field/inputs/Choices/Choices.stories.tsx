/* @aztlan/generator-front 0.7.3 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './Choices.js'

const meta: Meta<typeof Component> = {
  title     :'form/inputs/Choices',
  component :Component,
  decorators:[
    decorators.components.Relay,
    decorators.components.Grid,
    decorators.components.Form,
  ],
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    name       :'color',
    label      :'Favourite color',
    description:'This is a select where you can choose your favourite color.',
    options    :[
      {
        value:'red',
        label:'Red',
      },
      {
        value:'green',
        label:'Green',
      },
      {
        value:'blue',
        label:'Blue',
      },
      {
        value:'yellow',
        label:'Yellow',
      },
      {
        value:'black',
        label:'Black',
      },
      {
        value:'white',
        label:'White',
      },
    ],
  },
}

export const Columns: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    columns       :2,
    columnsDesktop:3,
  },
}

export const Multiple: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    name    :'color2',
    multiple:true,
  },
}

export const DisabledInput: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    name:'region',
  },
}

export const DisabledValue: StoryObj<typeof Component> = {
  args:{
    name   :'region-2',
    label  :'Region',
    options:[
      {
        value:'north',
        label:'North',
      },
      {
        value   :'south',
        label   :'South',
        disabled:true,
      },
      {
        value:'east',
        label:'East',
      },
      {
        value:'west',
        label:'West',
      },
    ],
  },
}
