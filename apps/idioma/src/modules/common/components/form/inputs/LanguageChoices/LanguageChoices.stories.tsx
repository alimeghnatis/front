/* @aztlan/generator-front 0.7.3 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './LanguageChoices.js'
import allLanguages from './allLanguages.json'

const meta: Meta<typeof Component> = {
  title     :'common/form/inputs/LanguageChoices',
  component :Component,
  decorators:[
    decorators.components.Relay,
    decorators.components.Grid,
    decorators.getters.form({
      defaultValues:{
        lang:[
          'fra',
          'ace',
        ],
      },
    }),
  ],
  parameters:{ layout: 'fullscreen' },
}

export default meta

const transformedOptions = allLanguages.map((language) => ({
  ...language,
  value:language.pt2t,
  label:`${language.name}`,
}))

export const Base: StoryObj<typeof Component> = {
  args:{
    name              :'lang',
    label             :'Language',
    spanLabelDesktop  :5,
    spanContentDesktop:9,
    // description       :'This is a select where you can choose your favourite color.',
    options           :transformedOptions,
    // multiple          :true,
  },
}
