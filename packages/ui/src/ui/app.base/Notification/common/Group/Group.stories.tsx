/* @aztlan/generator-front 3.8.0 */
import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import Component from './Group.js'
import Provider from '../../Provider.js'
import { NotificationLevel } from '../../types.js'

// import { decorators } from 'story-utils'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title     :'app.base/Notification/Group',
  component :Component,
  decorators:[
    (StoryFn) => (
      <Provider
        initialNotifications={[
          // { id:"1", content:"Sample Notification 1", level:"info" },
          {
            id     :'2',
            content:'Sample Notification 2',
            level  :NotificationLevel.SUCCESS,
            created:new Date(),
          },
          {
            id     :'3',
            content:'Sample Notification 3',
            level  :NotificationLevel.WARNING,
            created:new Date(),
          },
          {
            id     :'4',
            content:'Sample Notification 4',
            level  :NotificationLevel.ERROR,
            created:new Date(),
          },
        ]}
      >
        <StoryFn />
      </Provider>
    ),
    // decorators.app,
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  /*
  argTypes: {
    backgroundColor: { control: "color" }
  }
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
}

export default meta

export const Base: StoryObj<typeof Component> = { args: { displayRemainingTime: true } }

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample Group</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <Group {...args} />

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
} */
