/* @aztlan/generator-front 3.6.3 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'

import decorators from 'story-utils/decorators.js'
import Component from './Message.js'
// import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title     :'board/chat/Message',
  component :Component,
  decorators:[decorators.components.Notification],
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

const mockResolversAssistant = {}

const mockResolversUser = {}

const getRelayParameters = (
  typename, isLoading = false,
) => ({
  query:graphql`
    query MessageStoriesQuery {
      thread(id: "1") {
        messages {
          edges {
            node {
              ...MessageFragment
            }
          }
        }
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.thread.messages.edges[0].node,
  ],
  variables:{},

  mockResolvers:{
    LanguageMessageType:() => ({
      id       :'1',
      runId    :'1',
      threadId :'1',
      role     :typename === 'UserMessageType' ? 'user' : 'assistant',
      createdAt:'2021-09-08T15:00:00.000Z',
      isLoading,
      content  :{
        __typename:typename,
        content   :'This is a test.',
      },
    }),
    AssistantLanguageMessageType:() => ({
      content    :'Sure, here are a few suggestions for you.',
      suggestions:[
        'Preciso de comprar medicamentos na farmácia.',
        'A farmácia está aberta 24 horas por dia.',
        'O farmacêutico recomendou-me este medicamento para a dor.',
        'Os medicamentos genéricos são mais baratos na farmácia.',
        'A farmácia está localizada perto do hospital.',
      ],
      iso6391  :'pt',
      iso6392  :'por',
      iso6393  :'por',
      createdAt:'2024-05-16T15:02:06.276943+00:00',
    }),
    UserLanguageMessageType:() => ({
      content  :'Give me vocabulary suggestions to go to the pharmacy.',
      createdAt:'2024-05-16T15:02:06.276943+00:00',
    }),
  },
})

export const Assistant: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay: getRelayParameters('AssistantLanguageMessageType') },
}

export const User: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay: getRelayParameters('UserLanguageMessageType') },
}

export const AssistantLoading: StoryObj<typeof Component> = {
  args      :{ UNSTABLE_loading: true },
  parameters:{
    relay:getRelayParameters(
      'AssistantLanguageMessageType', true,
    ),
  },
}
