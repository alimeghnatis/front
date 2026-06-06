import { useMemo } from 'react'
import { useBoardContext } from 'modules/common/components'

const useExpressionLinks = (globalId) => {
  const {
    baseBoardUrl,
    getExpressionDetailsUrl,
    currentBoardId,
    currentExpressionId,
    currentExpressionActionSlug,
  } = useBoardContext()

  const links = useMemo(
    () => {
    // TODO temporary fix
      if (!currentBoardId) {
        return {
          detailsLink         :null,
          variantLink         :null,
          isExpressionSelected:null,
        }
      }

      const isExpressionSelected = currentExpressionId === globalId
      const detailsType = 'details'
      const variantType = 'variant'

      let detailsLink = getExpressionDetailsUrl?.(
        globalId, detailsType,
      )
      let variantLink = getExpressionDetailsUrl?.(
        globalId, variantType,
      )

      if (isExpressionSelected) {
        if (currentExpressionActionSlug === 'details') {
          detailsLink = baseBoardUrl
          variantLink = getExpressionDetailsUrl?.(
            globalId, variantType,
          )
        } else if (currentExpressionActionSlug === 'variant') {
          detailsLink = getExpressionDetailsUrl?.(
            globalId, detailsType,
          )
          variantLink = baseBoardUrl
        }
      }

      return {
        detailsLink,
        variantLink,
        isExpressionSelected,
      }
    }, [
      currentExpressionId,
      currentExpressionActionSlug,
      globalId,
      baseBoardUrl,
      getExpressionDetailsUrl,
    ],
  )
  return links
}

export default useExpressionLinks
