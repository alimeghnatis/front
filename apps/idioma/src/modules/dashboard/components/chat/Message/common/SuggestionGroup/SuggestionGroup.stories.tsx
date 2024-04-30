/* @aztlan/generator-front 3.6.3 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import Component from './SuggestionGroup.js'
// import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'modules/dashboard/chat/Message/SuggestionGroup',
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
    query SuggestionGroupStoriesQuery {
      thread(id: "1") {
        messages {
          edges {
            node {
              content {
                ... on AssistantMessageType {
                  ...SuggestionGroupFragment
                }
              }
            }
          }
        }
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.thread.messages.edges[0].node.content,
  ],
  variables    :{},
  mockResolvers:{
    AssistantMessageType:() => ({
      suggestions:[
        'Preciso de comprar medicamentos na farmácia.',
        'A farmácia está aberta 24 horas por dia.',
        'O farmacêutico recomendou-me este medicamento para a dor.',
        'Os medicamentos genéricos são mais baratos na farmácia.',
        'A farmácia está localizada perto do hospital.',
      ],
      iso6391:'pt',
      iso6392:'por',
      iso6393:'por',
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay },
}
