import { useMemo } from 'react'
import { graphql } from 'react-relay'
import {
  withErrorHandling, addGraphQLOptions,
} from '@aztlan/ui'

const QUERY = graphql`
  query useBoardFormFieldsLanguagesOptionsQuery {
    iso639pt2 {
      name
      pt2t
      audio
    }
  }
`

export { QUERY }

const useBoardFormFields = (instance) => {
  const fields = useMemo(
    () => [
      {
        name        :'name',
        type        :'text',
        label       :'Name',
        autoComplete:'off',
        disabled    :instance.isDefault,
        description :instance.isDefault
          ? 'This board is the default board and cannot be renamed.'
          : 'The name of the board.',
        registerProps:{
          required:{
            value  :true,
            message:'A board name is required',
          },
          minLength:{
            value  :5,
            message:'Board name must be at least 5 characters',
          },
          maxLength:{
            value  :50,
            message:'Board name must be at most 50 characters',
          },
        },
      },
      {
        name         :'isPublic',
        type         :'checkbox',
        label        :'Public',
        description  :'Whether this board requires login to be consulted.',
        registerProps:{
          required:{
            value  :false,
            message:'This field is required',
          },
        },
      },
      {
        name       :'explanationsLanguage',
        type       :'select',
        label      :'Explanations Language',
        description:'The language used for the general, gramatical, and word by word explanations.',
        extensions :[
          withErrorHandling,
          addGraphQLOptions(
            QUERY,

            'iso639pt2',
            {
              transformData:(d) => d.map(({
                pt2t, name,
              }) => ({
                value:pt2t,
                label:`${name} (${pt2t})`,
              })),
            },
          ),
        ],
      },
      {
        name         :'enabledLanguages',
        type         :'choices',
        multiple     :true,
        label        :'Enabled Languages',
        description  :'The languages activated for this board. Unused languages will be hidden from menus.',
        registerProps:{
          required:{
            value  :true,
            message:'At least one language must be enabled',
          },
        },
        extensions:[
          withErrorHandling,
          addGraphQLOptions(
            QUERY, 'iso639pt2', {
              transformData:(d) => d.map(({
                pt2t, name, audio,
              }) => ({
                value:pt2t,
                label:`${name} (${pt2t}) ${audio ? '+Audio' : ''}`,
              })),
            },
          ),
        ],
      },
    ],
    [],
  )

  return fields
}

export default useBoardFormFields
