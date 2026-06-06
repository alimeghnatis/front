/* @aztlan/generator-front 3.9.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import { decorators } from 'story-utils'
import Component from './ResetChatButton.js'

const meta: Meta<typeof Component> = {
  title     :'board/chat/ResetChatButton',
  component :Component,
  decorators:[decorators.components.Notification],
  /*
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
}

export default meta

const relay = {
  query:graphql`
    query ResetChatButtonStoriesQuery {
      board(id: "1") {
        thread {
          ...ResetChatButtonFragment
        }
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.board.thread,
  ],
  variables    :{},
  mockResolvers:{
    ThreadNode:() => ({
      id       :btoa('ThreadNode:1'),
      createdAt:'2021-09-01T00:00:00Z',
    }),
    LanguageMessageTypeConnection:() => ({
      edges:[
        {
          node:{
            id       :'msg_1J7wh32910oaskx',
            runId    :'1',
            threadId :'1',
            role     :'user',
            createdAt:'2021-09-01T00:00:00Z',
            content  :{
              __typename:'UserLanguageMessageType',
              content   :'I want to learn some vocabulary in portuguese',
            },
          },
        },
        {
          node:{
            id       :'msg_dad231ed0122idx',
            runId    :'1',
            threadId :'1',
            role     :'assistant',
            createdAt:'2021-09-01T00:00:00Z',
            content  :{
              __typename :'AssistantLanguageMessageType',
              content    :'What kind of vocabulary are you interested in learning in portuguese?',
              suggestions:[],
            },
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
