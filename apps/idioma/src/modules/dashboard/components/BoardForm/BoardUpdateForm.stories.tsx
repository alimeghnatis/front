/* @aztlan/generator-front 3.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import { graphql } from 'react-relay'
import Component from './BoardUpdateForm.js'
// import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'modules/dashboard/BoardForm/BoardUpdateForm',
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

const relay = {
  query:graphql`
    query BoardUpdateFormQuery {
      board(id: "1") {
        ...BoardUpdateFormFragment
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
      id                  :'1',
      name                :'Sample Board',
      isPublic            :true,
      explanationsLanguage:'spa',
      enabledLanguages    :'[ "spa", "eng" ]', // JSONField,
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay },
}
