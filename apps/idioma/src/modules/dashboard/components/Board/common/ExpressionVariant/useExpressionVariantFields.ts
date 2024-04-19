import { useMemo } from 'react'

const useExpressionVariantFields = (
  instance, boardInstance,
) => {
  const fields = useMemo(
    () => [
      {
        name    :'variantWord',
        label   :'word',
        type    :'choices',
        optional:true,
        options :[
          {
            value:null,
            label:'All words',
          },
          ...instance.content.split(' ').map((word) => ({
            value:word,
            label:word,
          })),
        ],
      },
      {
        name    :'variantName',
        label   :'tone',
        type    :'choices',
        optional:true,
        options :[
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
            value:'more polite',
            label:'more polite',
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
            value:'more berlin slang of 1980',
            label:'more berlin slang of 1980',
          },
          {
            value:'more munich slang of 1980',
            label:'more munich slang of 1980',
          },
        ],
      },
      {
        name    :'iso6393',
        label   :'lang',
        type    :'choices',
        optional:true,
        options :[
          {
            value:null,
            label:'original',
          },
          ...JSON.parse(boardInstance.enabledLanguages).map((lang) => ({
            value:lang,
            label:lang,
          })),
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
