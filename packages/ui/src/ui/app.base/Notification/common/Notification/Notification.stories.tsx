/* @aztlan/generator-front 3.8.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import Component from './Notification.js'
import Provider from '../../Provider.js'
import { NotificationLevel } from '../../types.js'

// import { decorators } from 'story-utils'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title     :'app.base/Notification/Notification',
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
          },
          {
            id     :'3',
            content:'Sample Notification 3',
            level  :NotificationLevel.WARNING,
          },
          {
            id     :'4',
            content:'Sample Notification 4',
            level  :NotificationLevel.ERROR,
          },
        ]}
      >
        <StoryFn />
      </Provider>
    ),
  ],
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

export const Base: StoryObj<typeof Component> = {
  args:{
    children            :'Sample Notification',
    level               :NotificationLevel.WARNING,
    displayRemainingTime:true,
    created             :new Date(),
    ttl                 :4,
  },
}

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample Notification</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <Notification {...args} />

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
} */
