import * as React from 'react'
import { useCallback } from 'react'
import debounce from 'lodash.debounce'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  Field, useNotificationContext,
} from '@aztlan/ui'
import {
  graphql, useFragment, useMutation,
} from 'react-relay'
import {
  FormProvider, useForm,
} from 'react-hook-form'

const componentClassName = 'rating-form'

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
    label  :'Are you satisfied with these explanations?',
    type   :'choices',
    options:[
      {
        value:'1',
        label:'No',
      },
      /*
      {
        value:'3',
        label:':-|',
      }, */
      {
        value:'5',
        label:'Yes',
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
        label:'Explanations quality',
      },
      {
        value:'AUDIO_MISMATCH',
        label:'Audio issues',
      },
      {
        value:'ANALYSIS_QUALITY',
        label:'Morpho-syntactic analysis',
      },
    ],
  },
]

function RatingForm({
  id,
  className: userClassName,
  style,
  data,
  ...otherProps
}: InferProps<typeof RatingForm.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )
  const defaultValues = {
    rating       :String(result.rating),
    ratingComment:result.ratingComment,
  }

  const methods = useForm({
    mode:'onChange',
    defaultValues,
  })

  const [
    commitRating,
    isInFlight,
  ] = useMutation(MUTATION_UPDATE)

  const { notify } = useNotificationContext()

  const fieldNames = [
    'rating',
    'ratingComment',
  ]

  const fieldValues = methods.watch(fieldNames)

  const hasChanged = fieldNames.some((
    fieldName, index,
  ) => fieldValues[index] !== defaultValues[fieldName])

  const [
    rating,
    ratingComment,
  ] = fieldValues

  const debouncedNotifySuccess = useCallback(
    debounce(
      () => {
        notify.success('Feedback sent.')
      }, 50,
    ),
    [],
  )

  const handleChange = useCallback(
    (input) => {
      commitRating({
        variables  :{ input },
        onCompleted:(response) => {
          debouncedNotifySuccess()
        },
        onError:(error) => {
          const { errors } = error?.res
          notify.errorCode(errors?.[0]?.message)
        },
      })
    },
    [commitRating],
  )

  React.useEffect(
    () => {
      if (hasChanged) {
        console.log(
          'rating will be committd', rating, fieldValues,
        )
        const input = {
          id    :atob(result.id).split(':')[1],
          rating:Number(rating),
        }
        if (ratingComment) {
          input.ratingComment = ratingComment
        }
        handleChange(input)
      }
    }, [
      rating,
      ratingComment,
      hasChanged,
    ],
  )

  return (
    <div
      id={id}
      className={[
        componentClassName,
        userClassName,
        'grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
    >
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
    </div>
  )
}

RatingForm.propTypes = { data: PropTypes.any }

export default RatingForm
