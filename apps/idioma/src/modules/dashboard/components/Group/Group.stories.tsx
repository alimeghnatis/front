/* @aztlan/generator-front 3.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import Component from './Group.js'
// import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'modules/dashboard/Group',
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
  fragment GroupFragment on GroupNode {
    id
    created
    expressions {
      edges {
        node {
          ...GroupExpressionFragment
        }
      }
    }
  }
`

const relay = {
  query:graphql`
    query GroupQuery {
      group(id: "1") {
        ...GroupFragment
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.group,
  ],
  variables    :{},
  mockResolvers:{
    GroupNode:() => ({
      id     :'1',
      created:'2021-09-01T00:00:00Z',
    }),
    ExpressionNodeConnection:() => ({
      edges:[
        {
          node:{
            id     :'1',
            created:'2021-09-01T00:00:00Z',
            content:'Sample Expression',
          },
        },
        {
          node:{
            id     :'2',
            created:'2021-09-02T00:00:00Z',
            content:'Roses are red, violets are blue',
          },
        },
        {
          node:{
            id     :'3',
            created:'2021-09-03T00:00:00Z',
            content:'I am a sample expression, you know?',
          },
        },
      ],
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args      :{ FRAGMENT },
  parameters:{ relay },
}
