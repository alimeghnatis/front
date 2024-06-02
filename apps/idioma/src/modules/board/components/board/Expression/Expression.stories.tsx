/* @aztlan/generator-front 3.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import { decorators } from 'story-utils'
import Component from './Expression.js'

const meta: Meta<typeof Component> = {
  title     :'board/board/Expression',
  component :Component,
  decorators:[
    decorators.components.Router,
    decorators.components.Notification,
  ],
  parameters:{ layout: 'fullscreen' },
  /*
  argTypes: {
    backgroundColor: { control: "color" }
  }
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
}

export default meta

const defaultNode = {
  id              :'1',
  content         :'Sample Expression',
  correctedContent:'This is an expression that is used as a sample for the storybook.',
  iso6391         :'es',
  iso6392         :'spa',
  iso6393         :'spa',
  isBookmarked    :false,
  textDirection   :'ltr',
}

const farsiNode = {
  correctedContent:'سلام، حال شما چطور است؟',
  iso6391         :'fa',
  iso6392         :'fas',
  iso6393         :'fas',
  textDirection   :'rtl',
}

const getRelay = (node = {}) => ({
  query:graphql`
    query ExpressionStoriesQuery {
      expression(id: "1") {
        ...ExpressionFragment
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.expression,
  ],
  variables    :{},
  mockResolvers:{
    ExpressionNode:() => ({
      ...defaultNode,
      ...node,
    }),
  },
})

export const Base: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay: getRelay() },
}

export const Extras: StoryObj<typeof Component> = {
  args:{
    extras    :'Extras',
    spanExtras:2,
  },
  parameters:{ relay: getRelay() },
}

export const RTL: StoryObj<typeof Component> = {
  args      :{ ...Base.args },
  parameters:{ relay: getRelay(farsiNode) },
}
