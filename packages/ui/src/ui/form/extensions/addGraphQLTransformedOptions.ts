import * as React from 'react'
import { useMemo } from 'react'
import {
  useLazyLoadQuery, GraphQLTaggedNode,
} from 'react-relay'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as formPropTypes from '../Field/propTypes.js'

const optionsPropType = PropTypes.arrayOf(formPropTypes.optionsShared.options)
const componentPropTypes = {
  ...formPropTypes.Wrapper,
  ...formPropTypes.optionsShared,
}

type InputOptions = Array<InferProps<typeof optionsPropType>>
type ComponentProps = InferProps<typeof componentPropTypes>

interface ExtensionOptions {
  variables?    :{ [key: string]: any };
  variableName? :string;
  fallback?     :React.ReactNode;
  transformData?:(options: any) => InputOptions;
}

/**
 * Function to create a higher-order component that fetches options for form fields
 * using GraphQL and Relay's useLazyLoadQuery hook. It enhances the component with
 * fetched data without direct error handling.
 * @param {GraphQLTaggedNode} QUERY - The GraphQL query used to fetch options.
 * @param {string} accessor - The key in the GraphQL response that contains the options.
 * @param {ExtensionOptions} options - Settings including custom error messages.
 * @returns {Function} - A React HOC returning an enhanced component
 */
const addGraphQLTransformedOptions = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: ExtensionOptions = {},
) => {
  const {
    variableName = 'payload',
    variables: passedVariables,
    fallback = React.createElement(
      'span', null, 'Loading',
    ),
    transformData,
  } = options

  return (WrappedComponent: React.ComponentType<ComponentProps>) => {
    function ExtendedComponent(props: ComponentProps): React.ReactElement {
      const { options: providedOptions } = props

      const variables = useMemo(
        () => ({
          ...passedVariables,
          [variableName]:providedOptions
            .filter((option) => !!option.value)
            .map((option) => option.value),
        }),
        [
          passedVariables,
          providedOptions,
          variableName,
        ],
      )

      const data = useLazyLoadQuery(
        QUERY, variables, { fetchPolicy: 'store-and-network' },
      )

      const transformedData = useMemo(
        () => {
          if (transformData) {
            return transformData(data[accessor])
          }
          return data[accessor]
        }, [
          data,
          accessor,
          transformData,
        ],
      )

      return React.createElement(
        WrappedComponent, {
          ...props,
          options:transformedData as InputOptions,
        },
      )
    }

    return function SuspendedComponent(props: ComponentProps): React.ReactElement {
      return React.createElement(
        React.Suspense,
        { fallback },
        React.createElement(
          ExtendedComponent, props,
        ),
      )
    }
  }
}

export default addGraphQLTransformedOptions
