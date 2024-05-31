/* @aztlan/generator-front 3.9.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import Component from './BoardCard.js'

// import { decorators } from 'story-utils'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'board/board/BoardCard',
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

const relay = {
  query:graphql`
    query BoardCardStoriesQuery {
      board(id: "1") {
        ...BoardCardFragment
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.board,
  ],
  variables    :{},
  mockResolvers:{
    BoardNode:() => ({
      id     :btoa('BoardNode:1'),
      name   :'Italian adjectives',
      created:'2021-09-01T00:00:00Z',
    }),
    GroupNodeConnection     :() => ({ count: 37 }),
    ExpressionNodeConnection:() => ({ count: 120 }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args:{ children: 'Sample BoardCard' },

  parameters:{ relay },
}

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample BoardCard</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <Component {...args} />

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
} */
