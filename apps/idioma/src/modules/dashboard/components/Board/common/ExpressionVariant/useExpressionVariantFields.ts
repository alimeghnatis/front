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
      },
      {
        name       :'variantNameOther',
        label      :'tone',
        optional   :true,
        type       :'text',
        placeholder:'more royal, more childish, more berlin slang of 1980',
        condition  :[
          ['variantName'],
          ([variantName]) => variantName === 'other',
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
          ...JSON.parse(boardInstance?.enabledLanguages || '[]').map((lang) => ({
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
