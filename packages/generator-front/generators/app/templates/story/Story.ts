/* <%= pkg %> <%= version %> */
//import * as React from 'react'

import { Meta, StoryObj } from "@storybook/react";
//import { Meta, StoryFn } from '@storybook/react'
import Component from "./<%= name %>.js";
<% if (optionRelay) { %>
import { graphql } from 'react-relay'
<% } %>
// import { decorators } from 'story-utils'
//import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title: "<%= fullname %>",
  component: Component
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
  },*/
};

export default meta;

<% if (optionRelay) { %>
const relay = {
  query:graphql`
    query <%= name %>StoriesQuery {
      CHANGEME(id: "1") {
        ...<%= name %>Fragment
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data.CHANGEME,
  ],
  variables    :{},
  mockResolvers:{
    /*
    ExpressionNode:() => ({
      id              :'1',
      content         :'Sample Expression',
      correctedContent:'This is an expression that is used as a sample for the storybook.',
      iso6391         :'es',
      iso6392         :'spa',
      iso6393         :'spa',
      isBookmarked    :false,
    }),*/
  },
}
<% } %>

export const Base: StoryObj<typeof Component> = {
  args: {
    children: "Sample <%= name %>"
  }
  <% if (optionRelay) { %>
  ,parameters: { relay }
  <% } %>
};

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample <%= name %></Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <<%= name %> {...args} />
                                                     
export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
}*/
