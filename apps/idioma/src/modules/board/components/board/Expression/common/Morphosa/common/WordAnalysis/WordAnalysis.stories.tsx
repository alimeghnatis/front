/* @aztlan/generator-front 3.9.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import Component from './WordAnalysis.js'

import testData4 from '../../testData/test1.json'

// import { decorators } from 'story-utils'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'board/board/Expression/Morphosa/WordAnalysis',
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

const getRelayConfigForTest = (
  testData, index = 0,
) => ({
  query:graphql`
    query WordAnalysisStoriesQuery {
      expression(id: "1") {
        analysis {
          payloadV1 {
            ...WordAnalysisFragment
          }
        }
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.expression.analysis.payloadV1[index],
  ],
  variables    :{},
  mockResolvers:{
    ExpressionAnalysisNode:() => ({
      id       :btoa('ExpressionAnalysisNode:1'),
      payloadV1:testData.words,
    }),
  },
})

export const Word0: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay: getRelayConfigForTest(testData4) },
}

export const Word1: StoryObj<typeof Component> = {
  args      :{},
  parameters:{
    relay:getRelayConfigForTest(
      testData4, 1,
    ),
  },
}

export const Word2: StoryObj<typeof Component> = {
  args      :{},
  parameters:{
    relay:getRelayConfigForTest(
      testData4, 2,
    ),
  },
}

export const Word3: StoryObj<typeof Component> = {
  args      :{},
  parameters:{
    relay:getRelayConfigForTest(
      testData4, 3,
    ),
  },
}
export const Word4: StoryObj<typeof Component> = {
  args      :{},
  parameters:{
    relay:getRelayConfigForTest(
      testData4, 4,
    ),
  },
}
export const Word5: StoryObj<typeof Component> = {
  args      :{},
  parameters:{
    relay:getRelayConfigForTest(
      testData4, 5,
    ),
  },
}
export const Word6: StoryObj<typeof Component> = {
  args      :{},
  parameters:{
    relay:getRelayConfigForTest(
      testData4, 6,
    ),
  },
}
