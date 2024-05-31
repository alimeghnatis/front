/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import { decorators } from 'story-utils'
import { RawGroup as Component } from './BoardCardGroup.js'

const meta: Meta<typeof Component> = {
  title     :'board/board/BoardCard/Group',
  component :Component,
  decorators:[decorators.components.Router],
  /*
  decorators: [
    //decorators.app,
    //storyfn => <div className="">{ storyfn() }</div>,
  ]
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
}

export default meta

const relay = {
  query:graphql`
    query BoardCardGroupStoriesQuery {
      viewer {
        boardMemberships(first: 50)
          @connection(key: "useBoardMembershipsFragment_boardMemberships") {
          count
          edges {
            node {
              id
              role
              board {
                id
                name
                newExpressionsCount
                isDefault
                ...BoardCardFragment
              }
            }
          }
        }
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.viewer.boardMemberships,
  ],
  variables    :{},
  mockResolvers:{
    BoardMembershipNodeConnection:() => ({
      count:12,
      edges:[
        {
          node:{
            role :'OWNER',
            board:{
              id         :btoa('BoardNode:1'),
              name       :'Deutsch Akkusativ',
              groups     :{ count: 41 },
              expressions:{ count: 120 },
              created    :'2021-09-01T00:00:00Z',
            },
          },
        },
        {
          node:{
            role :'OWNER',
            board:{
              id         :btoa('BoardNode:2'),
              name       :'Polish greetings',
              groups     :{ count: 4 },
              expressions:{ count: 12 },
              created    :'2021-09-01T00:00:00Z',
            },
          },
        },
        {
          node:{
            role :'MEMBER',
            board:{
              id         :btoa('BoardNode:2'),
              name       :'Italian verbs',
              groups     :{ count: 20 },
              expressions:{ count: 42 },
              created    :'2021-09-01T00:00:00Z',
            },
          },
        },
        {
          node:{
            role :'OWNER',
            board:{
              id         :btoa('BoardNode:2'),
              name       :'Random german words',
              groups     :{ count: 184 },
              expressions:{ count: 370 },
              created    :'2021-09-01T00:00:00Z',
            },
          },
        },
      ],
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args      :{ className: 'background far container' },
  parameters:{ relay },
}

export const CustomSpan: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    cardSpan       :3,
    cardSpanDesktop:6,
  },
  parameters:{ relay },
}
