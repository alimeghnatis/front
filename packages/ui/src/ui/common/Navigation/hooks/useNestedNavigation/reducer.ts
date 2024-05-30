/* eslint-disable no-case-declarations */
import {
  State, Action, StateChangeTypes,
} from './types.js'
import {
  findItemTree,
  isItemDisabled,
  getFirstEnabledChild,
} from '../../utils.js'

export default function nestedNavigationReducer(
  state: State,
  action: Action,
): State {
  let changes: Partial<State> = {}

  switch (action.type) {
    case StateChangeTypes.FunctionSelectItem: {
      const selectedItem = state.navigationIndex[action.item!.url!]
      const selectedItems = [...state.selectedItems]
      selectedItems[action.level!] = selectedItem!
      selectedItems.splice(action.level! + 1) // Clear out selections for deeper levels
      changes = { selectedItems }
      break
    }

    case StateChangeTypes.FunctionSetHighlightedItems: {
      changes = { highlightedItems: action.highlightedItems! }
      break
    }

    case StateChangeTypes.FunctionSetInputValue: {
      changes = { inputValue: action.inputValue! }
      break
    }

    case StateChangeTypes.ToggleButtonClick:
    case StateChangeTypes.FunctionToggleMenu: {
      changes = {
        isOpen      :!state.isOpen,
        currentDepth:state.isOpen ? 0 : 1,
      }
      if (state.isOpen) {
        changes.highlightedItems = []
      } else if (state.selectedItems.length > 1) {
        changes.highlightedItems = action.depth
          ? state.selectedItems.slice(
            0, action.depth,
          )
          : state.selectedItems
      } else {
        const firstEnabledChild = getFirstEnabledChild(state.rootItem)
        const highlightedItems = findItemTree(
          state.navigationIndex,
          firstEnabledChild.url || firstEnabledChild.key,
        )
        changes.highlightedItems = highlightedItems
      }
      break
    }

    case StateChangeTypes.FunctionOpenMenu: {
      changes = { isOpen: true }
      if (state.selectedItems.length > 1) {
        changes.highlightedItems = action.depth
          ? state.selectedItems.slice(
            0, action.depth,
          )
          : state.selectedItems
      } else {
        const firstEnabledChild = getFirstEnabledChild(state.rootItem)
        const highlightedItems = findItemTree(
          state.navigationIndex,
          firstEnabledChild.url || firstEnabledChild.key,
        )
        changes.highlightedItems = highlightedItems
      }
      break
    }

    case StateChangeTypes.FunctionCloseMenu: {
      changes = {
        isOpen          :false,
        highlightedItems:[],
        currentDepth    :0,
      }
      break
    }

    case StateChangeTypes.FunctionReset: {
      changes = {
        isOpen          :false,
        selectedItems   :[state.rootItem],
        highlightedItems:[],
        currentDepth    :0,
        inputValue      :'',
      }
      break
    }

    case StateChangeTypes.ItemClick: {
      if (action.item.url) {
        const selectedItem = state.navigationIndex[action.item!.url]
        const updatedSelectedItems = findItemTree(
          state.navigationIndex,
          selectedItem.url,
        )
        changes = {
          selectedItems   :updatedSelectedItems,
          currentDepth    :selectedItem.depth,
          highlightedItems:[],
          isOpen          :false,
        }
      }
      break
    }

    case StateChangeTypes.ItemMouseMove: {
      if (
        !(
          action.item
          === state.highlightedItems[state.highlightedItems.length - 1]
        )
      ) {
        const hoverItem = state.navigationIndex[action.item!.url || action.item!.key]
        const newHighlightedItems = findItemTree(
          state.navigationIndex,
          hoverItem.url || hoverItem.key,
        )
        changes = { highlightedItems: newHighlightedItems }
      }
      break
    }

    case StateChangeTypes.MenuMouseLeave: {
      changes = { highlightedItems: [] }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownArrowDown: {
      const {
        currentDepth, highlightedItems, navigationIndex,
      } = state
      const currentItem = highlightedItems[currentDepth]
      if (currentItem) {
        const parentItem = navigationIndex[currentItem.parentUrl!]
        const currentIndex = parentItem.items.indexOf(currentItem)
        let nextIndex = (currentIndex + 1) % parentItem.items.length
        let nextItem = parentItem.items[nextIndex]

        while (isItemDisabled(nextItem)) {
          nextIndex = (nextIndex + 1) % parentItem.items.length
          nextItem = parentItem.items[nextIndex]
        }
        const newHighlightedItems = findItemTree(
          state.navigationIndex,
          nextItem.url || nextItem.key,
        )

        changes = { highlightedItems: newHighlightedItems }
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownArrowUp: {
      const {
        currentDepth, highlightedItems, navigationIndex,
      } = state
      const currentItem = highlightedItems[currentDepth]
      if (currentItem) {
        const parentItem = navigationIndex[currentItem.parentUrl!]
        const currentIndex = parentItem.items.indexOf(currentItem)
        let prevIndex = (currentIndex - 1 + parentItem.items.length)
          % parentItem.items.length
        let prevItem = parentItem.items[prevIndex]

        while (isItemDisabled(prevItem)) {
          prevIndex = (prevIndex - 1 + parentItem.items.length) % parentItem.items.length
          prevItem = parentItem.items[prevIndex]
        }
        const newHighlightedItems = findItemTree(
          state.navigationIndex,
          prevItem.url || prevItem.key,
        )
        changes = { highlightedItems: newHighlightedItems }
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownArrowLeft: {
      const {
        currentDepth, highlightedItems,
      } = state
      if (currentDepth > 1) {
        const newHighlightedItems = [...highlightedItems]
        newHighlightedItems.splice(currentDepth) // Remove the current depth level
        changes = {
          currentDepth    :currentDepth - 1,
          highlightedItems:newHighlightedItems,
        }
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownArrowRight: {
      const {
        currentDepth, highlightedItems,
      } = state
      const currentItem = highlightedItems[currentDepth]
      if (currentItem && currentItem.items && currentItem.items.length > 0) {
        const nextDepth = currentDepth + 1
        const firstChild = getFirstEnabledChild(currentItem)
        if (firstChild) {
          const newHighlightedItems = findItemTree(
            state.navigationIndex,
            firstChild.url || firstChild.key,
          )
          changes = {
            currentDepth    :nextDepth,
            highlightedItems:newHighlightedItems,
          }
        }
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownEnter: {
      changes = {
        highlightedItems:[],
        selectedItems   :state.highlightedItems,
        isOpen          :false,
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownEscape: {
      changes = {
        isOpen          :false,
        highlightedItems:[],
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownPageUp: {
      const {
        currentDepth, highlightedItems, navigationIndex,
      } = state
      const currentItem = highlightedItems[currentDepth]
      if (currentItem) {
        const parentItem = navigationIndex[currentItem.parentUrl!]
        const currentIndex = parentItem.items.indexOf(currentItem)
        const pageSize = 10
        const prevIndex = Math.max(
          0, currentIndex - pageSize,
        )
        const prevItem = parentItem.items[prevIndex]
        const newHighlightedItems = findItemTree(
          state.navigationIndex,
          prevItem.url || prevItem.key,
        )

        changes = { highlightedItems: newHighlightedItems }
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownPageDown: {
      const {
        currentDepth, highlightedItems, navigationIndex,
      } = state
      const currentItem = highlightedItems[currentDepth]
      if (currentItem) {
        const parentItem = navigationIndex[currentItem.parentUrl!]
        const currentIndex = parentItem.items.indexOf(currentItem)
        const pageSize = 10
        const nextIndex = Math.min(
          parentItem.items.length - 1,
          currentIndex + pageSize,
        )
        const nextItem = parentItem.items[nextIndex]
        const newHighlightedItems = findItemTree(
          state.navigationIndex,
          nextItem.url || nextItem.key,
        )

        changes = { highlightedItems: newHighlightedItems }
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownHome: {
      const {
        currentDepth, highlightedItems, navigationIndex,
      } = state
      const currentItem = highlightedItems[currentDepth]
      if (currentItem) {
        const parentItem = navigationIndex[currentItem.parentUrl!]
        const firstItem = parentItem.items[0]
        const newHighlightedItems = findItemTree(
          state.navigationIndex,
          firstItem.url || firstItem.key,
        )

        changes = { highlightedItems: newHighlightedItems }
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownEnd: {
      const {
        currentDepth, highlightedItems, navigationIndex,
      } = state
      const currentItem = highlightedItems[currentDepth]
      if (currentItem) {
        const parentItem = navigationIndex[currentItem.parentUrl!]
        const lastIndex = parentItem.items.length - 1
        const lastItem = parentItem.items[lastIndex]
        const newHighlightedItems = findItemTree(
          state.navigationIndex,
          lastItem.url || lastItem.key,
        )

        changes = { highlightedItems: newHighlightedItems }
      }
      break
    }

    case StateChangeTypes.FunctionAddKeySoFar: {
      const newKeysSoFar = state.keysSoFar + action.inputValue!
      const currentItem = state.highlightedItems[state.currentDepth]
      const parentItem = state.navigationIndex[currentItem.parentUrl!]
      const matchItem = parentItem.items.find((item) => item.label?.toLowerCase().startsWith(newKeysSoFar.toLowerCase())
          && !isItemDisabled(item))

      if (matchItem) {
        const newHighlightedItems = findItemTree(
          state.navigationIndex,
          matchItem.url || matchItem.key,
        )
        changes = {
          keysSoFar       :newKeysSoFar,
          highlightedItems:newHighlightedItems,
        }
      } else {
        changes = { keysSoFar: newKeysSoFar }
      }
      break
    }

    case StateChangeTypes.FunctionClearKeysSoFar: {
      changes = { keysSoFar: '' }
      break
    }

    case StateChangeTypes.SetState:
      let {
        highlightedItems, selectedItems,
      } = state
      const lastHighlightedItem = highlightedItems[highlightedItems.length - 1]
      const lastSelectedItem = selectedItems[selectedItems.length - 1]
      if (
        action.state.navigationIndex?.[
          lastHighlightedItem.url || lastHighlightedItem.key
        ]
      ) {
        highlightedItems = findItemTree(
          action.state.navigationIndex,
          lastHighlightedItem.url || lastHighlightedItem.key,
        )
      }

      if (
        action.state.navigationIndex?.[
          lastSelectedItem.url || lastSelectedItem.key
        ]
      ) {
        selectedItems = findItemTree(
          action.state.navigationIndex,
          lastSelectedItem.url || lastSelectedItem.key,
        )
      }

      changes = {
        ...state,
        highlightedItems,
        ...action.state,
      }
      break

      /*

    case StateChangeTypes.ToggleButtonBlur: {
      changes = {
        isOpen            :false,
        highlightedItems:[],
      }
      break
    }

        */

    default: {
      // console.log(`Unhandled action type: ${action.type}`)
    }
  }

  return {
    ...state,
    ...changes,
  }
}
