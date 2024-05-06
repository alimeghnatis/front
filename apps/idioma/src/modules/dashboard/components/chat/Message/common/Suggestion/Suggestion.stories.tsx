/* @aztlan/generator-front 3.6.3 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import Component from './Suggestion.js'
// import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'dashboard/chat/Message/Suggestion',
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

/*
const relay = {
  query:graphql`
    query SuggestionStoriesQuery {
      thread(id: "1") {
        messages {
          edges {
            node {
              content {
                ...on AssistantMessageType {
                  ...SuggestionFragment
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
    data.thread[0].messages.edges[0].node.content,
  ],
  variables    :{},
  mockResolvers:{
    AssistantMessageType:() => ({
      suggestions:[
        'Suggestion 1',
        'Suggestion 2',
        'Suggestion 3',
      ]
    }),
  },
} */

export const Base: StoryObj<typeof Component> = {
  args:{
    children:'This is a test sentence to try the Suggestion component.',
    language:'en',
  },
}

export const Selected: StoryObj<typeof Component> = {
  args:{
    children:'This is a test sentence to try the Suggestion component.',
    language:'en',
    selected:true,
  },
}
