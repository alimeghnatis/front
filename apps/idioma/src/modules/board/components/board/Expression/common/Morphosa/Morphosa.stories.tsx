/* @aztlan/generator-front 3.9.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import Component from './Morphosa.js'
import testData1 from './testData/test1.json'
import testData2 from './testData/test2.json'
import testData3 from './testData/test3.json'
import testData4 from './testData/test4.json'
import testData5 from './testData/test5.json'

// import { decorators } from 'story-utils'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'board/board/Expression/Morphosa',
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

const getRelayConfigForTest = (testData) => ({
  query:graphql`
    query MorphosaStoriesQuery {
      expression(id: "1") {
        ...MorphosaFragment
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.expression,
  ],
  variables    :{},
  mockResolvers:{
    ExpressionNode        :() => ({ id: 'RXhwcmVzc2lvbk5vZGU6MzU2Zjc2NTMtNDhiMS00OWI1LTgzOWEtMjQ5YjczMThlYzlj' }),
    ExpressionAnalysisNode:() => ({
      id       :btoa('ExpressionAnalysisNode:1'),
      payloadV1:testData.words,
    }),
  },
})

export const Base: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay: getRelayConfigForTest(testData1) },
}

export const Interactive: StoryObj<typeof Component> = {
  args:{
    displayHeadOnHover        :true,
    displayWordAnalysisOnHover:true,
  },
  parameters:{ relay: getRelayConfigForTest(testData1) },
}

export const Test2: StoryObj<typeof Component> = {
  args      :Interactive.args,
  parameters:{ relay: getRelayConfigForTest(testData2) },
}

export const Test3: StoryObj<typeof Component> = {
  args      :Interactive.args,
  parameters:{ relay: getRelayConfigForTest(testData3) },
}

export const Test4: StoryObj<typeof Component> = {
  args      :Interactive.args,
  parameters:{ relay: getRelayConfigForTest(testData4) },
}

export const Test5: StoryObj<typeof Component> = {
  args      :Interactive.args,
  parameters:{ relay: getRelayConfigForTest(testData5) },
}

export const Exclude: StoryObj<typeof Component> = {
  args:{
    exclude:[
      'PRONOUN',
      'ADVERB',
      'ADJECTIVE',
      'case',
      'gender',
    ],
  },
  parameters:{ relay: getRelayConfigForTest(testData3) },
}
