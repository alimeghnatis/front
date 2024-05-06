/* @aztlan/generator-front 2.4.2 */

import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import { decorators } from 'story-utils'
import { RawSelectHeader as Component } from './SelectHeader.js'

const meta: Meta<typeof Component> = {
  title     :'common/Board/SelectHeader',
  component :Component,
  decorators:[decorators.components.Router],
}

export default meta

/*
const relay = {
  query:graphql`
    query SelectHeaderQuery {
      viewer {
        boardMemberships {
          ...SelectHeaderFragment
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
              id  :'1',
              name:'Board 1',
            },
          },
        },
        {
          node:{
            role :'MEMBER',
            board:{
              id  :'2',
              name:'Board 2',
            },
          },
        },
      ],
    }),
  },
} */

export const Base: StoryObj<typeof Component> = {
  args:{},
  // parameters:{ relay },
}
