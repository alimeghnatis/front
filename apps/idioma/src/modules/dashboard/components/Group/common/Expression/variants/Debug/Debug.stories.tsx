/* @aztlan/generator-front 3.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import Component from './Debug.js'
import decorators from '../../../../../../../../decorators.js'

const meta: Meta<typeof Component> = {
  title     :'modules/dashboard/Board/Group/Expression/Debug',
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
    query DebugExpressionStoriesQuery {
      expression(id: "1") {
        ...DebugExpressionFragment
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
