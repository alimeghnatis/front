/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './Breadcrumb.js'
import { SelectMenu } from '../SelectMenu/index.js'

// import { decorators } from 'story-utils'

const meta: Meta<typeof Component> = {
  title     :'common/Navigation/common/Breadcrumb',
  component :Component,
  decorators:[
    decorators.components.Router,
    // decorators.app,
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  parameters:{ layout: 'fullscreen' },
  /*
  argTypes: {
    backgroundColor: { control: "color" }
  }
  */
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    children:[
      <Component.Item to="/">Home</Component.Item>,
      <Component.Item to="/blog/">Blog</Component.Item>,
      <Component.Item to="/article-title">Article Title</Component.Item>,
    ],
  },
}

export const Separator: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    separator:'>',
  },
}

export const WithCustomItem: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    children:[
      <Component.Item to="/">Home</Component.Item>,
      <Component.Item
        to="/blog/"
        childrenAs={SelectMenu}
        wrapperProps={{
          rootItem:{
            label:'Menu',
            items:[
              {
                label:'Blog',
                url  :'/blog',
              },
              {
                label:'Profile',
                url  :'/profile',
              },
            ],
          },
        }}
      >
        Blog
      </Component.Item>,
      <Component.Item to="/article-title">Article Title</Component.Item>,
    ],
  },
}

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample Breadcrumb</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <Component {...args} />

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
} */
