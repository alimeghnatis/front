/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'

import {
  Meta, StoryObj, StoryFn,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './SelectMenu.js'

const meta: Meta<typeof Component> = {
  title     :'common/Navigation/common/SelectMenu',
  component :Component,
  decorators:[decorators.components.Router],
  parameters:{ layout: 'fullscreen' },
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    rootItem:{
      label:'Navigation',
      items:[
        {
          label:'Home',
          url  :'/',
        },
        {
          label:'About',
          url  :'/about',
        },
        {
          label:'Contact',
          url  :'/contact',
        },
        {
          label   :'Disabled',
          url     :'/disabled',
          disabled:true,
        },
      ],
    },
  },
}

export const WithNestedGroups: StoryObj<typeof Component> = {
  args:{
    openOnHover:true,
    rootItem   :{
      label:'Navigation',
      items:[
        ...Base.args.rootItem.items,
        {
          label         :'User Menu',
          displayItemsAs:'group',
          items         :[
            {
              label:'Profile',
              url  :'/profile',
            },
            {
              label:'Settings',
              url  :'/settings',
            },
            {
              label    :'Logout',
              Component:() => <h2>Logout</h2>,
            },
          ],
        },
        {
          label         :'Sth Menu',
          displayItemsAs:'group',
        },
        {
          label         :'Admin Menu',
          displayItemsAs:'group',
          items         :[
            {
              label:'Users',
              url  :'/users',
            },
            {
              label:'Roles',
              url  :'/roles',
            },
            {
              label:'Permissions',
              url  :'/permissions',
            },
          ],
        },
        {
          label         :'Disabled Menu',
          displayItemsAs:'group',
          // disabled      :true,
          items         :[
            {
              label   :'Users',
              url     :'/users4',
              disabled:true,
            },
            {
              label   :'Roles',
              url     :'/roles4',
              disabled:true,
            },
          ],
        },
        {
          label         :'Disabled Header',
          displayItemsAs:'group',
          disabled      :true,
          items         :[
            {
              label:'Users',
              url  :'/users3',
            },
            {
              label:'Roles',
              url  :'/roles2',
            },
            {
              label:'Permissions',
              url  :'/permissions4',
            },
          ],
        },
      ],
    },
  },
}

export const ShouldRemainOpen: StoryObj<typeof Component> = {
  args:{
    ...WithNestedGroups.args,
    shouldRemainOpen:true,
    initialIsOpen   :true,
  },
}

export const InTemplate: StoryFn<typeof Component> = (args) => (
  <div className="grid background near">
    <Component
      className="span-5"
      {...args}
      {...WithNestedGroups.args}
    />
  </div>
)

export const InTemplateCustomWidth: StoryFn<typeof Component> = (args) => (
  <div className="grid background near">
    <Component
      className="span-1"
      defaultText="ST"
      style={{ gridColumnStart: '14' }}
      optionsSpan={4}
      align="right"
      alwaysDisplayDefault
      {...args}
      {...WithNestedGroups.args}
    />
  </div>
)
