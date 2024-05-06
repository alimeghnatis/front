/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
// import { Meta, StoryFn } from '@storybook/react'
import { decorators } from 'story-utils'
import Component from './Details.js'
// import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title     :'modules/dashboard/Board/Details',
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
  } */
}

export default meta

const relay = {
  query:graphql`
    query DetailsStoriesQuery {
      expression(id: "1") {
        ...DetailsFragment
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
      id                :'RXhwcmVzc2lvbk5vZGU6MzU2Zjc2NTMtNDhiMS00OWI1LTgzOWEtMjQ5YjczMThlYzlj',
      iso6391           :'de',
      content           :'Um einen platten Reifen zu reparieren',
      correctedContent  :'Um einen platten Reifen zu reparieren.',
      generalExplanation:"This is a German sentence. The general meaning is 'To repair a flat tire.'",
      grammarExplanation:"The sentence is a clause starting with the subordinating conjunction 'Um' (*to*). The subject 'einen platten Reifen' (*a flat tire*) is in the accusative case and the infinitive verb 'reparieren' (*to repair*) is at the end.",
      wordsExplanation  :"1. *Um* - subordinating conjunction meaning 'to'.\n2. *einen* - masculine accusative article meaning 'a'.\n3. *platten* - adjective meaning 'flat'.\n4. *Reifen* - masculine noun meaning 'tire'.\n5. *zu* - infinitive marker.\n6. *reparieren* - infinitive verb meaning 'to repair'.",
      audioUrl          :'https://idioma-data-testing.s3.eu-central-2.amazonaws.com/9bcdd0ed-807a-402e-962a-d822fb291aec/356f7653-48b1-49b5-839a-249b7318ec9c.mp3',
      audioKey          :'9bcdd0ed-807a-402e-962a-d822fb291aec/356f7653-48b1-49b5-839a-249b7318ec9c.mp3',
      created           :'2024-04-11T10:09:34.599380+00:00',
      updated           :'2024-04-11T10:09:37.028231+00:00',
    }),
  },
}

export const Base: StoryObj<typeof Component> = {
  args      :{},
  parameters:{ relay },
}
