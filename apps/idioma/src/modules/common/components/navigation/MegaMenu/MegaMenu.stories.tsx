/* @aztlan/generator-front 3.9.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'

import { graphql } from 'react-relay'

import { decorators } from 'story-utils'
import * as paths from 'modules/paths'
import { RawMegaMenu as Component } from './MegaMenu.js'

const meta: Meta<typeof Component> = {
  title     :'common/navigation/MegaMenu',
  component :Component,
  decorators:[decorators.components.Router],
  parameters:{ layout: 'fullscreen' },
}

export default meta

const relay = {
  query:graphql`
    query MegaMenuStoriesQuery {
      viewer {
        boardMemberships(first: 50)
          @connection(key: "useBoardMembershipsFragment_boardMemberships") {
          edges {
            node {
              id
              role
              board {
                id
                name
                newExpressionsCount
                isDefault
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
      edges:[
        {
          node:{
            role :'OWNER',
            board:{
              id  :btoa('BoardNode:1'),
              name:'Board 1',
            },
          },
        },
        {
          node:{
            role :'MEMBER',
            board:{
              id  :btoa('BoardNode:2'),
              name:'Board 2',
            },
          },
        },
      ],
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args      :{ initialUrl: paths.profile.generatePath('PROFILE') },
  parameters:{ relay },
}
