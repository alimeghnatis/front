/* @aztlan/generator-front 3.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import { decorators } from 'story-utils'
import Component from './Debug.js'

const meta: Meta<typeof Component> = {
  title     :'board/board/Group/Debug',
  component :Component,
  decorators:[decorators.components.Router],
  parameters:{ layout: 'fullscreen' },
  /*
  argTypes: {
    backgroundColor: { control: "color" }
  } */
}

export default meta

const relay = {
  query:graphql`
    query DebugGroupStoriesQuery {
      ...DebugGroupFragment
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.group,
  ],
  variables    :{},
  mockResolvers:{
    GroupNode:() => ({
      id     :'1',
      created:'2021-09-01T00:00:00Z',
    }),
    ExpressionNodeConnection:() => ({
      edges:[
        {
          node:{
            id              :'1',
            iso6391         :'es',
            created         :'2021-09-01T00:00:00Z',
            content         :'Sample Expression',
            correctedContent:'Sample Expression',
            rating          :3,
            ratingComment   :'WRONG_LANGUAGE',
          },
        },
        {
          node:{
            id              :'2',
            iso6391         :'en',
            created         :'2021-09-02T00:00:00Z',
            content         :'Roses are red, violets are blue',
            correctedContent:'Roses are red, violets are blue',
            rating          :1,
            ratingComment   :'EXPLANATIONS_QUALITY',
          },
        },
        {
          node:{
            id              :'3',
            iso6391         :'es',
            created         :'2021-09-03T00:00:00Z',
            content         :'I am a sample expression, you know?',
            correctedContent:'I am a sample expression, you know?',
            rating          :3,
            ratingComment   :'EXPLANATIONS_QUALITY',
          },
        },
      ],
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay },
}
