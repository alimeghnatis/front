/* @aztlan/generator-front 3.9.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './List.js'

// import { decorators } from 'story-utils'

const meta: Meta<typeof Component> = {
  title     :'common/Navigation/MegaMenu/List',
  component :Component,
  decorators:[
    decorators.components.Router,
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  /*
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
}

export default meta

const items = [
  {
    label:'Spanish',
    url  :'/es',
  },
  {
    label   :'French',
    url     :'/fr',
    disabled:true,
  },
  {
    label:'English',
    url  :'/en',
  },
  {
    label:'German',
    url  :'/de',
  },
  {
    label:'Ukrainian',
    url  :'/uk',
  },
  {
    label:'Portuguese',
    url  :'/pt',
  },
  {
    label:'Polish',
    url  :'/pl',
  },
]

export const Base: StoryObj<typeof Component> = {
  args:{
    getItemProps    :() => ({}),
    background      :'near',
    items,
    selectedItems   :[items[5]],
    highlightedItems:[items[6]],
  },
}

export const Columns: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    columns:2,
  },
}
