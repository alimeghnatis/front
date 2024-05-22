/* @aztlan/generator-front 3.6.3 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import { decorators } from 'story-utils'
import Component from './Chat.js'

const meta: Meta<typeof Component> = {
  title     :'board/chat/Chat',
  component :Component,
  decorators:[decorators.components.Notification],
  parameters:{ layout: 'fullscreen' },
  /*
  argTypes: {
    backgroundColor: { control: "color" }
  }
  */
}

export default meta

const relay = {
  query:graphql`
    query ChatStoriesQuery {
      board(id: "1") {
        ...ChatFragment
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.board,
  ],
  variables    :{},
  mockResolvers:{
    BoardNode :() => ({ openaiThreadId: '1' }),
    ThreadNode:() => ({
      id       :btoa('ThreadNode:1'),
      createdAt:'2021-09-01T00:00:00Z',
    }),
    LanguageMessageTypeConnection:() => ({
      edges:[
        {
          node:{
            id      :'msg_1J7wh32910oaskx',
            runId   :'1',
            threadId:'1',
            role    :'user',
            content :{
              __typename:'UserLanguageMessageType',
              content   :'I want to learn some vocabulary in portuguese',
            },
          },
        },
        {
          node:{
            id      :'msg_dad231ed0122idx',
            runId   :'1',
            threadId:'1',
            role    :'assistant',
            content :{
              __typename :'AssistantLanguageMessageType',
              content    :'What kind of vocabulary are you interested in learning in portuguese?',
              suggestions:[],
            },
          },
        },
        {
          node:{
            id      :'msg_1J7whaddasasaddsa',
            runId   :'1',
            threadId:'1',
            role    :'user',
            content :{
              __typename:'UserLanguageMessageType',
              content   :'Vocabulary related to food and drinks',
            },
          },
        },
        {
          node:{
            id      :'msg_1J7whaddaaddsa',
            runId   :'1',
            threadId:'1',
            role    :'assistant',
            content :{
              __typename :'AssistantLanguageMessageType',
              content    :'Sure, here are a few suggestions for you related to food and drinks in Portuguese.',
              suggestions:[
                'Eu prefiro café sem açúcar para manter a saúde.',
                'A água é a melhor bebida para a saúde.',
                'O chá é uma bebida quente e saudável.',
                'A cerveja é uma bebida alcoólica.',
                'Ela faz um bolo de chocolate delicioso para festas.',
              ],
              iso6391:'pt',
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
