/* @aztlan/generator-front 0.9.0 */
import * as React from 'react'
import {
  Meta, StoryObj,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './Modular.js'

const meta: Meta<typeof Component> = {
  title     :'form/ModularForm',
  component :Component,
  decorators:[decorators.components.Router],
  parameters:{ layout: 'fullscreen' },
}

export default meta

const Form = Component

export const Base: StoryObj<typeof Component> = {
  args:{
    className:'grid',

    onSubmit:(data) => alert(JSON.stringify(
      data, null, 2,
    )),
    children:[
      <div
        className="container"
        style={{
          height  :'100%',
          overflow:'auto',
        }}
      >
        <Form.Section
          fields={[
            {
              type         :'text',
              label        :'First Name',
              name         :'first-name',
              autoComplete :'given-name',
              registerProps:{
                required:{
                  value  :true,
                  message:"first name can't be empty",
                },
              },
            },
            {
              type         :'text',
              label        :'Last Name',
              name         :'last-name',
              optional     :true,
              autoComplete :'family-name',
              registerProps:{
                minLength:{
                  value  :5,
                  message:'last name must have at least 5 characters',
                },
              },
            },
            {
              type    :'text',
              label   :'Username',
              name    :'username',
              optional:true,
            },
            {
              type        :'password',
              label       :'Password',
              name        :'password',
              autoComplete:'new-password',
              optional    :true,
              description :'Do not try something like "password123" or "12345678"',
            },
            {
              type         :'email',
              label        :'Email',
              name         :'email',
              description  :'Try something @gmail.com',
              autoComplete :'email',
              registerProps:{
                /*
              minLength:{
                value  :8,
                message:'email must have at least 8 characters',
              },
              pattern:{
                value  :/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message:'Please enter a valid email address',
              }, */
              },
            },
          ]}
        />
      </div>,
      <Form.SubmitBar />,
    ],
    fieldProps:{
      spanLabel         :8,
      spanLabelDesktop  :4,
      spanContent       :8,
      spanContentDesktop:10,
    },
  },
}
