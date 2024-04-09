/* @aztlan/generator-front 3.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import Component from './Expression.js'
// import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'modules/dashboard/Group/common/Expression',
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

const FRAGMENT = graphql`
  fragment ExpressionFragment on ExpressionNode {
    id
    content
    language
  }
`

const relay = {
  query:graphql`
    query ExpressionQuery {
      expression(id: "1") {
        ...ExpressionFragment
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
      id      :'1',
      content :'Sample Expression',
      language:'es',
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args      :{ FRAGMENT },
  parameters:{ relay },
}
