/* @aztlan/generator-front 3.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
// import { Meta, StoryFn } from '@storybook/react'
import Component from './ExpressionVariant.js'
// import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
// import decorators from "story-utils/decorators.js";
import decorators from '../../../../../../decorators.js'

const meta: Meta<typeof Component> = {
  title     :'modules/dashboard/Board/ExpressionVariant',
  component :Component,
  decorators:[
    decorators.components.Router,
    (StoryFn) => (
      <div className="grid container">
        <div className="grid span-8 md-span-10">{StoryFn()}</div>
      </div>
    ),
  ],
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
    query ExpressionVariantStoriesQuery {
      expression(id: "1") {
        ...ExpressionVariantFragment
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
      id              :'RXhwcmVzc2lvbk5vZGU6MzU2Zjc2NTMtNDhiMS00OWI1LTgzOWEtMjQ5YjczMThlYzlj',
      iso6391         :'de',
      content         :'Um einen platten Reifen zu reparieren',
      correctedContent:'Um einen platten Reifen zu reparieren.',
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay },
}
