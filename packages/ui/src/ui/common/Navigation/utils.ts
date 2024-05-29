// REF 4.1
import type {
  Item, PreparedItem,
} from './types'

export type NavigationIndex = {
  [url: string]:PreparedItem;
}

interface PreparedNavigationData {
  preparedRoot            :PreparedItem;
  nearestNavigableAncestor:PreparedItem | null,
  navigationIndex         :NavigationIndex;
}

/**
 * Recursively prepares navigation data, setting correct depth, parent URL, and updating a URL index.
 * It simplifies ancestor tracking by using recursive logic to handle navigation structuring.
 *
 * @param root The current item being processed in the navigation structure.
 * @param nearestNavigableAncestor The closest ancestor item with a URL, used for context in recursion.
 * @param navigationIndex A collection for indexing items by their URL for efficient lookups.
 * @returns {PreparedNavigationData} An object containing the prepared navigation structure.
 */
export function prepareNavigationData(
  root: Item,
  nearestNavigableAncestor: PreparedItem | null = null,
  navigationIndex: NavigationIndex = {},
): PreparedNavigationData {
  // Prepare the root item with its depth and parent URL.
  let preparedRoot: PreparedItem = {
    ...root as PreparedItem, // type quick fix
    depth    :nearestNavigableAncestor ? nearestNavigableAncestor.depth + 1 : 0,
    parentUrl:nearestNavigableAncestor ? nearestNavigableAncestor.url : null,
  }

  // If the root item has a URL, it becomes its own nearest navigable ancestor.
  if (root.url) {
    preparedRoot = {
      ...preparedRoot,
      depth:nearestNavigableAncestor ? nearestNavigableAncestor.depth + 1 : 0,
    }
    navigationIndex[root.url || root.key] = preparedRoot
  }

  // The nearest navigable ancestor for sub-items is either
  // the current root (if navigable) or the passed ancestor.
  const updatedNearestNavigableAncestor = root.url ? preparedRoot : nearestNavigableAncestor

  // Recursively prepare each sub-item.
  preparedRoot.items = root.items?.map((item) => prepareNavigationData(
    item, updatedNearestNavigableAncestor, navigationIndex,
  ).preparedRoot)
  return {
    preparedRoot,
    nearestNavigableAncestor:updatedNearestNavigableAncestor,
    navigationIndex,
  }
}

export function findCurrentTree(
  navigationIndex:NavigationIndex, url,
):PreparedItem[] {
  /**
   * Constructs the initial currentTree based on the current URL.
   *
   * @param {Object} navigationIndex - A dictionary mapping URLs to their corresponding items.
   * @param {string} url - The current URL to find in the navigationIndex.
   * @returns {Array} The path (array of items) from the root to the item matching the current URL.
   */
  const path = []
  let currentItem = navigationIndex[url]
  currentItem = currentItem.items ? currentItem : navigationIndex[currentItem.parentUrl]

  while (currentItem) {
    path.unshift(currentItem)
    currentItem = navigationIndex[currentItem.parentUrl]
  }

  return path
}

export function findItemTree(
  navigationIndex:NavigationIndex, key:string,
):PreparedItem[] {
  /**
   * Constructs the initial currentTree based on the current URL.
   *
   * @param {Object} navigationIndex - A dictionary mapping URLs to their corresponding items.
   * @param {string} url - The current URL to find in the navigationIndex.
   * @returns {Array} The path (array of items) from the root to the item matching the current URL.
   */
  const path = []
  let currentItem = navigationIndex[key]

  while (currentItem) {
    path.unshift(currentItem)
    currentItem = navigationIndex[currentItem.parentUrl]
  }

  return path
}

export const isItemDisabled = (item: PreparedItem) => item.disabled === true

export const getFirstEnabledChild = (item: PreparedItem) => item.items?.find((i) => !isItemDisabled(i))
