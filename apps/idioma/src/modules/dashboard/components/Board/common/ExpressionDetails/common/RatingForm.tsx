import * as React from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { Field } from '@aztlan/ui'
import {
  graphql, useFragment, useMutation,
} from 'react-relay'
import {
  FormProvider, useForm,
} from 'react-hook-form'

const FRAGMENT = graphql`
  fragment RatingFormFragment on ExpressionNode {
    id
    rating
    ratingComment
  }
`

const MUTATION_UPDATE = graphql`
  mutation RatingFormUpdateMutation($input: UpdateExpressionMutationInput!) {
    updateExpression(input: $input) {
      instance {
        id
        rating
        ratingComment
      }
      errors {
        field
        messages
      }
    }
  }
`

const fields = [
  {
    name   :'rating',
    label  :'Rating',
    type   :'choices',
    options:[
      {
        value:'1',
        label:':-(',
      },
      {
        value:'3',
        label:':-|',
      },
      {
        value:'5',
        label:':-)',
      },
    ],
  },
  {
    name     :'ratingComment',
    label    :"What's wrong?",
    type     :'choices',
    condition:[
      ['rating'],
      ([rating]) => rating > 0 && rating < 5,
    ],
    options:[
      {
        value:'WRONG_LANGUAGE',
        label:'Wrong explanations language',
      },
      {
        value:'EXPLANATIONS_QUALITY',
        label:'Explanations quality is lacking',
      },
      {
        value:'AUDIO_MISMATCH',
        label:'Audio doesnt sound good',
      },
    ],
  },
]

function RatingForm({
  data,
  ...otherProps
}: InferProps<typeof RatingForm.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )
  const methods = useForm({
    mode         :'onChange',
    defaultValues:{
      rating       :String(result.rating),
      ratingComment:result.ratingComment,
    },
  })

  const [
    commitRating,
    isInFlight,
  ] = useMutation(MUTATION_UPDATE)

  // watch inputs from rhf
  // on input change commit

  const [
    rating,
    ratingComment,
  ] = methods.watch([
    'rating',
    'ratingComment',
  ])

  React.useEffect(
    () => {
      if (rating) {
        const input = {
          id    :atob(result.id).split(':')[1],
          rating:Number(rating),
        }
        if (ratingComment) {
          input.ratingComment = ratingComment
        }
        commitRating({ variables: { input } })
      }
    }, [
      rating,
      ratingComment,
    ],
  )

  return (
    <FormProvider {...methods}>
      {fields.map((field) => (
        <Field
          spanLabel
          key={field.name}
          {...field}
          {...otherProps}
        />
      ))}
    </FormProvider>
  )
}

RatingForm.propTypes = { data: PropTypes.any }

export default RatingForm
