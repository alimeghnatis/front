/* @aztlan/generator-front 3.4.7 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import { decorators } from 'story-utils'
import { RawViewerUpdateForm as Component } from './ViewerUpdateForm.js'

const meta: Meta<typeof Component> = {
  title     :'profile/ViewerUpdateForm',
  component :Component,
  decorators:[decorators.components.Notification],
}

export default meta

const relay = {
  query:graphql`
    query ViewerUpdateFormQuery {
      viewer {
        ...ViewerUpdateFormFragment
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.viewer,
  ],
  variables    :{},
  mockResolvers:{
    UserNode:() => ({
      id            :btoa('UserNode:1'),
      firstName     :'John',
      lastName      :'Doe',
      email         :'johndoe@example.com',
      isSuperuser   :true,
      profilePicture:'https://example.com/johndoe.jpg',
      created       :'2021-01-01T00:00:00Z',
      updated       :'2021-01-01T00:00:00Z',
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay },
}
