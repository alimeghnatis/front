/* @aztlan/generator-front 3.9.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { Triptych } from '@aztlan/ui'

import { graphql } from 'react-relay'

import { decorators } from 'story-utils'
import { RawSelectMenu as Component } from './SelectMenu.js'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title     :'common/SelectSettingsMenu',
  component :Component,
  decorators:[decorators.components.Router],
}

export default meta

/*
const relay = {
  query:graphql`
    query SelectMenuBoardStoriesQuery {
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
} */

export const Base: StoryObj<typeof Component> = {
  args:{ children: 'Sample BreadcrumbSelectMenu' },

  // parameters:{ relay },
}
