import * as React from 'react'
import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import { decorators } from 'story-utils'
import Component from './RatingForm.js'
// import decorators from '../../../../decorators.js'

const meta: Meta<typeof Component> = {
  title     :'board/board/Expression/Details/RatingForm',
  component :Component,
  decorators:[
    (Story) => (
      <div className="grid">
        <Story />
      </div>
    ),
    decorators.components.Notification,
  ],
}

export default meta

const relay = {
  query:graphql`
    query RatingFormQuery {
      expression(id: "1") {
        ...RatingFormFragment
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
      id           :btoa('ExpressionNode:1'),
      rating       :null,
      ratingComment:'WRONG_LANGUAGE',
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args:{
    spanLabel         :8,
    spanLabelDesktop  :2,
    spanContent       :8,
    spanContentDesktop:10,
  },
  parameters:{ relay },
}
