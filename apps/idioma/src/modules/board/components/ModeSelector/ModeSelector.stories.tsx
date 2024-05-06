/* @aztlan/generator-front 3.6.3 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import decorators from 'story-utils/decorators.js'
import Component from './ModeSelector.js'

const meta: Meta<typeof Component> = {
  title     :'common/ModeSelector',
  component :Component,
  decorators:[decorators.components.Router],
  /*
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
    query ModeSelectorStoriesQuery {
      board(id: "1") {
        ...ModeSelectorFragment
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.board,
  ],
  variables    :{},
  mockResolvers:{
    BoardNode:() => ({
      id         :'Qm9hcmROb2RlOjE=',
      name       :'BoardNode',
      description:'BoardNode',
      mode       :'BoardNode',
      created    :'2024-04-11T10:09:34.599380+00:00',
      updated    :'2024-04-11T10:09:37.028231+00:00',
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args      :{ boardId: btoa('BoardNode:abcdef') },
  parameters:{ relay },
}
