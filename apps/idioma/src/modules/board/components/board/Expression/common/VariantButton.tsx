import * as React from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import { Link } from 'react-router-dom'
import { Button } from '@aztlan/ui'
import {
  graphql,
  useFragment,
  // RecordSourceSelectorProxy,
} from 'react-relay'
import useExpressionLinks from '../useExpressionLinks.js'

const FRAGMENT = graphql`
  fragment VariantButtonFragment on ExpressionNode {
    id
    isNew
    isProcessed
  }
`

function VariantButton(
  {
    data, ...props
  }: InferProps<typeof VariantButton.propTypes>,
  ref,
): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )

  const isNewAndUnprocessed = result.isNew && !result.isProcessed

  const { variantLink } = useExpressionLinks(result.id)

  return (
    <Button
      disabled={result.isNew}
      className={[
        result.isNew && styleNames.modifierNew,
        !result.isProcessed && styleNames.modifierLoading,
      ]
        .filter(Boolean)
        .join(' ')}
      title="Create a new variant of this expression"
      {...props}
      ref={ref}
      as={Link}
      to={variantLink}
    >
      *
    </Button>
  )
}

VariantButton.propTypes = { data: PropTypes.object.isRequired }

export default React.forwardRef(VariantButton as React.ForwardRefRenderFunction<HTMLButtonElement>)
