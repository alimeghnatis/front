import {
  graphql, useFragment,
} from 'react-relay'
import { useViewer } from '@aztlan/ui'

const FRAGMENT = graphql`
  fragment useViewerPreferencesFragment on UserNode {
    preferences {
      actionOnExpressionClick
    }
  }
`

const useViewerPreferences = () => {
  const { data } = useViewer()

  const result = useFragment(
    FRAGMENT, data,
  )
  return null || result?.preferences
}

export default useViewerPreferences
