/* @aztlan/generator-front 3.9.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import Component from './MegaMenuBase.js'

// import { decorators } from 'story-utils'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'common/Navigation/MegaMenuBase',
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

export const Base: StoryObj<typeof Component> = {
  args:{
    rootItem:{
      label:'Navigation',
      url  :'/',
      items:[
        {
          label:'Home',
          url  :'/home',
        },
        {
          label   :'Disabled for now',
          url     :'/dis',
          disabled:true,
        },
        {
          label:'Organization Details',
          url  :'/org',
        },
        /*
        {
          label         :'Collections UNSTABLE',
          displayItemsAs:'group',
          items         :[
            {
              label:'All images',
              url  :'/address2',
            },
            {
              label:"User's images",
              url  :'/contact2',
            },
          ],
        }, */
        {
          label:'Location',
          url  :'/location',
          items:[
            {
              label   :'Address',
              url     :'/address',
              disabled:true,
            },
            {
              label:'Feedback',
              url  :'/feedback',
            },
            {
              label:'Jobs',
              url  :'/jobs',
            },
            {
              label:'Contact',
              url  :'/contact',
            },
          ],
        },
        {
          label:'Settings',
          url  :'/settingsa',
          items:[
            {
              label:'Account',
              url  :'/accounta',
              items:[
                {
                  label:'Profile',
                  url  :'/profile',
                },
                {
                  label   :'Notifications',
                  url     :'/notificationsa',
                  disabled:true,
                },
                {
                  label:'Security',
                  url  :'/securitya',
                },
                {
                  label:'Billing',
                  url  :'/billinga',
                },
                {
                  label:'Logout',
                  url  :'/logouta',
                },
              ],
            },

            {
              label:'Notifications',
              url  :'/notifications',
            },
            {
              label:'Security',
              url  :'/security',
            },
            {
              label:'Billing',
              url  :'/billing',
            },
            {
              label:'Logout',
              url  :'/logout',
            },
          ],
        },
      ],
    },
  },
}

export const InitialUrl: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    initialUrl:'/billing',
  },
}
