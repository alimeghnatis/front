/* @aztlan/generator-front 3.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import { decorators } from 'story-utils'
import Component from './Default.js'

const meta: Meta<typeof Component> = {
  title     :'dashboard/board/Expression/Default',
  component :Component,
  decorators:[decorators.components.Router],
  parameters:{ layout: 'fullscreen' },
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
    query DefaultExpressionStoriesQuery {
      expression(id: "1") {
        ...DefaultExpressionFragment
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.expression,
  ],
  variables    :{},
  mockResolvers:{
    ExpressionNode:() => ({
      id              :'1',
      content         :'Sample Expression',
      correctedContent:'This is an expression that is used as a sample for the storybook.',
      iso6391         :'es',
      iso6392         :'spa',
      iso6393         :'spa',
      isBookmarked    :false,
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay },
}
