/* @aztlan/generator-front 3.6.3 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import { decorators } from 'story-utils'
import Component from './CreateForm.js'

const meta: Meta<typeof Component> = {
  title     :'dashboard/chat/Chat/CreateForm',
  component :Component,
  decorators:[decorators.components.Relay],
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
    query CreateFormMessageStoriesQuery {
      board(id: "1") {
        ...CreateFormFragment
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.board,
  ],
  variables    :{},
  mockResolvers:{ BoardNode: () => ({ openaiThreadId: '1' }) },
}

export const Base: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay },
}
