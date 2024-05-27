import { useMemo } from 'react'

const useExpressionVariantFields = (
  instance, boardInstance,
) => {
  const fields = useMemo(
    () => [
      {
        name   :'variantWord',
        label  :'word',
        type   :'choices',
        options:[
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
        name   :'variantName',
        label  :'tone',
        type   :'choices',
        options:[
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
        name   :'iso6393',
        label  :'lang',
        type   :'choices',
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
