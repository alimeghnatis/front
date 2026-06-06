/* @aztlan/generator-front 3.8.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import Component from './UsageState.js'
// import { decorators } from 'story-utils'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'billing/UsageState',
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

const plan = {
  maxCharacters :30 * 1000,
  maxExpressions:30 * 100,
  maxTokens     :30 * 2000 * 100,
  maxBoards     :25,
  name          :'Tester Plan',
  version       :1,
}

const usedExample = {
  usedCharacters :12340,
  usedExpressions:410,
  usedTokens     :30 * 1245 * 30,
  boardCount     :2,
}

const relay = {
  query:graphql`
    query UsageStateStoriesQuery {
      usageState(id: "1") {
        ...UsageStateFragment
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.usageState,
  ],
  variables    :{},
  mockResolvers:{
    UsageStateNode:() => ({
      id                  :btoa('UsageStateNode:1'),
      periodStart         :'2021-01-01',
      periodEnd           :'2021-02-01',
      ...usedExample,
      leftoverCharacters  :82,
      leftoverTokens      :2310,
      leftoverExpressions :5,
      remainingCharacters :plan.maxCharacters - usedExample.usedCharacters,
      remainingTokens     :plan.maxTokens - usedExample.usedTokens,
      remainingExpressions:plan.maxExpressions - usedExample.usedExpressions,
      boardCount          :3,
      plan,
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args:{ children: 'Sample UsageState' },

  parameters:{ relay },
}
