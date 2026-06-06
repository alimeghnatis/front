/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './MegaMenu.js'
import { OpenOnOptions } from '../../hooks/useNestedNavigation/types.js'
import { ToggleComponentType } from './types.js'

// import { decorators } from 'story-utils'

const meta: Meta<typeof Component> = {
  title     :'common/Navigation/MegaMenu',
  component :Component,
  decorators:[
    decorators.components.Router,
    decorators.components.Grid,
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  parameters:{ layout: 'fullscreen' },
}

export default meta

function TestItemsComponent({
  getItemProps,
  selectedItems,
  highlightedItems,
  root,
}: any) {
  const { items } = root
  return (
    <ul className={[
      'span-5',
      'md-span-5',
    ].filter((e) => e).join(' ')}
    >
      {items.map((item) => (
        <li
          key={item.label}
          {...getItemProps({ item })}
          style={
            {
              background:highlightedItems.includes(item)
                ? 'blue'
                : selectedItems.includes(item)
                  ? 'yellow'
                  : 'red',
            } as React.CSSProperties
          }
        >
          <span className={[].filter(Boolean).join(' ')}>{item.label}</span>
        </li>
      ))}
    </ul>
  )
}

export const Base: StoryObj<typeof Component> = {
  args:{
    className           :'span-8 md-span-2',
    initialIsOpen       :true,
    toggleComponentProps:{
      getDynamicProps:({ isOpen }) => ({
        color:isOpen ? 'success' : 'warning',
        //
      }),
    },
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
              label    :'Contact',
              url      :'/contact',
              Component:({ item }) => (
                <button
                  onMouseOver={() => console.log('mouse entered')}
                  type="button"
                >
                  {item.label}
                </button>
              ),
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
              ],
            },
            {
              label              :'Languages',
              url                :'/languages',
              itemsComponentProps:{
                columns    :2,
                spanDesktop:6,
              },
              items:[
                {
                  label:'Spanish',
                  url  :'/es',
                },
                {
                  label   :'French',
                  url     :'/fr',
                  disabled:true,
                },
                {
                  label:'English',
                  url  :'/en',
                },
                {
                  label:'German',
                  url  :'/de',
                },
                {
                  label:'Ukrainian',
                  url  :'/uk',
                },
                {
                  label:'Portuguese',
                  url  :'/pt',
                },
                {
                  label:'Polish',
                  url  :'/pl',
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
              label         :'Billing',
              url           :'/billing',
              displayItemsAs:'custom',
              ItemsComponent:TestItemsComponent,
              items         :[
                {
                  label:'Invoices',
                  url  :'/invoices',
                },
                {
                  label:'Plans',
                  url  :'/plan',
                },
                {
                  label:'Payment preferences',
                  url  :'/payment-pr',
                },
              ],
            },
            {
              label    :'Logout',
              key      :'logout',
              Component:({ item }) => <strong>{item.label}</strong>,
              // url  :'/logout',
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

export const OpenOnHover: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    initialIsOpen:false,
    openOn       :OpenOnOptions.hover,
  },
}

export const BreadcrumbToggle: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    className           :'span-8 md-span-14',
    toggleComponentType :ToggleComponentType.breadcrumb,
    initialIsOpen       :false,
    openOn              :OpenOnOptions.hover,
    toggleComponentProps:{
      slice          :0,
      getDynamicProps:({ index }) => ({
        spanDesktop:index === 3 ? 5 : 3,
        style      :{
          background:index === 2
            ? 'var(--warning)'
            : index === 3
              ? 'var(--success)'
              : undefined,
        },
      }),
    },
  },
}
