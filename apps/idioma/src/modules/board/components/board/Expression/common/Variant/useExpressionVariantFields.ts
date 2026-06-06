import * as React from 'react'
import { useMemo } from 'react'
import { graphql } from 'react-relay'
import {
  withErrorHandling,
  addGraphQLTransformedOptions,
  useTriptychContext,
} from '@aztlan/ui'

const QUERY = graphql`
  query useExpressionVariantFieldsLanguagesOptionsQuery($payload: [String!]) {
    iso639pt2(codes_In: $payload) {
      pt2t
      name
      audio
    }
  }
`

const useExpressionVariantFields = (
  instance, boardInstance,
) => {
  const { selectSecondary } = useTriptychContext()
  const fields = useMemo(
    () => [
      {
        name       :'variantWord',
        label      :'word',
        type       :'choices',
        description:'Choose a word from the original  expression you would like to use to generate a new expression.',
        options    :[
          {
            value:null,
            label:'All words',
          },
          ...instance.content.split(' ').map((word) => ({
            value:word,
            label:word,
          })),
        ],
        registerProps:{ required: { value: false } },
      },
      {
        name          :'variantName',
        label         :'tone',
        type          :'choices',
        columns       :2,
        columnsDesktop:3,
        description   :'The tone you choose will be used to create a new expression. This is useful to explore registers of language and idiomatic expressions. If you want to add a new tone, please select "other" and write the tone in the field below.',
        options       :[
          {
            value:'language level A2',
            label:'level A2',
          },
          {
            value:'language level B1',
            label:'level B1',
          },
          {
            value:'language level B2',
            label:'level B2',
          },
          {
            value:'language level C1',
            label:'level C1',
          },
          {
            value:'more polite',
            label:'more polite',
          },
          {
            value:'more formal',
            label:'more formal',
          },
          {
            value:'more informal',
            label:'more informal',
          },
          {
            value:'more slang',
            label:'more slang',
          },
          {
            value:'more vulgar',
            label:'more vulgar',
          },
          {
            value:'more litterary',
            label:'more litterary',
          },
          {
            value:'more antiquated',
            label:'more antiquated',
          },
          {
            value:'more neutral',
            label:'more neutral',
          },
          {
            value:'other',
            label:'other',
          },
        ],
        registerProps:{ required: { value: false } },
      },
      {
        name       :'variantNameOther',
        label      :'tone',
        type       :'text',
        placeholder:'more royal, more childish, more berlin slang of 1980',
        description:'(Experimental) : Enter the tone you would like to use.',
        condition  :[
          ['variantName'],
          ([variantName]) => variantName === 'other',
        ],
        registerProps:{
          required:{
            value  :true,
            message:'Please enter a valid value',
          },
        },
      },
      {
        name          :'iso6393',
        label         :'lang',
        type          :'choices',
        columns       :2,
        columnsDesktop:3,
        description   :React.createElement(
          React.Fragment, null, [
            'Choose a language to translate the word into. To enable more translation languages, go to the ',
            React.createElement(
              'a',
              {
                href   :'#',
                onClick:() => selectSecondary('board-settings'),
              },
              'board settings.',
            ),
          ],
        ),
        options:[
          {
            value:null,
            label:'original',
          },
          ...JSON.parse(boardInstance?.enabledLanguages || '[]').map((lang) => ({
            value:lang,
            label:lang,
          })),
        ],
        registerProps:{ required: { value: false } },
        extensions   :[
          withErrorHandling,
          addGraphQLTransformedOptions(
            QUERY, 'iso639pt2', {
              transformData:(item) => item.map(({
                pt2t, name, audio,
              }) => ({
                value:pt2t,
                label:`${name} (${pt2t})`,
              })),
            },
          ),
        ],
      },
      /*
          {
            name :'iso6393',
            label:'Iso6393',
            type :'text',
          },
          {
            name :'created',
            label:'Created',
            type :'text',
          }, */
    ],
    [
      instance,
      boardInstance,
    ],
  )
  return fields
}

export default useExpressionVariantFields
