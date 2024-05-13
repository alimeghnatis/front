import * as React from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import { Link } from 'react-router-dom'
import {
  graphql,
  useFragment,
  // RecordSourceSelectorProxy,
} from 'react-relay'
import useExpressionLinks from '../useExpressionLinks.js'

const FRAGMENT = graphql`
  fragment DetailsButtonFragment on ExpressionNode {
    id
    isNew
    isProcessed
  }
`

function DetailsButton(
  {
    data, ...props
  }: InferProps<typeof DetailsButton.propTypes>,
  ref,
): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )

  const isNewAndUnprocessed = result.isNew && !result.isProcessed

  const { detailsLink } = useExpressionLinks(result.id)

  return (
    <Link to={detailsLink}>
      <button
        disabled={result.isNew}
        className={[
          result.isNew && styleNames.modifierNew,
          !result.isProcessed && styleNames.modifierLoading,
        ]
          .filter(Boolean)
          .join(' ')}
        title="Display expression details and explanations"
        {...props}
        ref={ref}
      >
        ?
      </button>
    </Link>
  )
}

DetailsButton.propTypes = { data: PropTypes.object.isRequired }

export default React.forwardRef(DetailsButton as React.ForwardRefRenderFunction<HTMLButtonElement>)
