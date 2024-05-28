/* eslint-disable no-case-declarations */
import {
  State, Action, StateChangeTypes,
} from './types.js'
import { findItemTree } from '../../utils.js'

export default function nestedNavigationReducer(
  state: State,
  action: Action,
): State {
  let changes: Partial<State> = {}

  switch (action.type) {
    case StateChangeTypes.FunctionSelectItem: {
      const selectedItem = state.urlIndex[action.item!.url!]
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
        isOpen          :!state.isOpen,
        highlightedItems:state.isOpen
          ? []
          : findItemTree(
            state.urlIndex, state.rootItem.items[0].url,
          ),
        currentDepth:state.isOpen ? 0 : 1,
      }
      break
    }

    case StateChangeTypes.FunctionOpenMenu: {
      changes = {
        isOpen          :true,
        highlightedItems:findItemTree(
          state.urlIndex,
          state.rootItem.items[0].url,
        ),
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
        selectedItems   :[],
        highlightedItems:[],
        currentDepth    :0,
        inputValue      :'',
      }
      break
    }

    case StateChangeTypes.ItemClick: {
      const selectedItem = state.urlIndex[action.item!.url!]
      const updatedSelectedItems = findItemTree(
        state.urlIndex,
        selectedItem.url!,
      )
      changes = {
        selectedItems   :updatedSelectedItems,
        currentDepth    :selectedItem.depth,
        highlightedItems:[],
      }
      break
    }

    case StateChangeTypes.ItemMouseMove: {
      const hoverItem = state.urlIndex[action.item!.url!]
      const newHighlightedItems = findItemTree(
        state.urlIndex, hoverItem.url!,
      )
      changes = { highlightedItems: newHighlightedItems }
      break
    }

    case StateChangeTypes.MenuMouseLeave: {
      changes = { highlightedItems: [] }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownArrowDown: {
      const {
        currentDepth, highlightedItems, urlIndex,
      } = state
      const currentItem = highlightedItems[currentDepth]
      console.log(
        currentItem, urlIndex, highlightedItems,
      )
      if (currentItem) {
        const parentItem = urlIndex[currentItem.parentUrl!]
        const currentIndex = parentItem.items.indexOf(currentItem)
        const nextIndex = (currentIndex + 1) % parentItem.items.length // Loop to the beginning
        const nextItem = parentItem.items[nextIndex]
        const newHighlightedItems = findItemTree(
          state.urlIndex, nextItem.url,
        )

        changes = { highlightedItems: newHighlightedItems }
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownArrowUp: {
      const {
        currentDepth, highlightedItems, urlIndex,
      } = state
      const currentItem = highlightedItems[currentDepth]
      if (currentItem) {
        const parentItem = urlIndex[currentItem.parentUrl!]
        const currentIndex = parentItem.items.indexOf(currentItem)
        const prevIndex = (currentIndex - 1 + parentItem.items.length)
          % parentItem.items.length // Loop to the end
        const prevItem = parentItem.items[prevIndex]
        const newHighlightedItems = findItemTree(
          state.urlIndex, prevItem.url,
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
        const firstChild = currentItem.items[0] // Append the first child item
        const newHighlightedItems = findItemTree(
          state.urlIndex,
          firstChild.url,
        )
        changes = {
          currentDepth    :nextDepth,
          highlightedItems:newHighlightedItems,
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
        currentDepth, highlightedItems, urlIndex,
      } = state
      const currentItem = highlightedItems[currentDepth]
      if (currentItem) {
        const parentItem = urlIndex[currentItem.parentUrl!]
        const currentIndex = parentItem.items.indexOf(currentItem)
        const pageSize = 10
        const prevIndex = Math.max(
          0, currentIndex - pageSize,
        )
        const prevItem = parentItem.items[prevIndex]
        const newHighlightedItems = findItemTree(
          state.urlIndex, prevItem.url,
        )

        changes = { highlightedItems: newHighlightedItems }
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownPageDown: {
      const {
        currentDepth, highlightedItems, urlIndex,
      } = state
      const currentItem = highlightedItems[currentDepth]
      if (currentItem) {
        const parentItem = urlIndex[currentItem.parentUrl!]
        const currentIndex = parentItem.items.indexOf(currentItem)
        const pageSize = 10
        const nextIndex = Math.min(
          parentItem.items.length - 1,
          currentIndex + pageSize,
        )
        const nextItem = parentItem.items[nextIndex]
        const newHighlightedItems = findItemTree(
          state.urlIndex, nextItem.url,
        )

        changes = { highlightedItems: newHighlightedItems }
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownHome: {
      const {
        currentDepth, highlightedItems, urlIndex,
      } = state
      const currentItem = highlightedItems[currentDepth]
      if (currentItem) {
        const parentItem = urlIndex[currentItem.parentUrl!]
        const firstItem = parentItem.items[0]
        const newHighlightedItems = findItemTree(
          state.urlIndex, firstItem.url,
        )

        changes = { highlightedItems: newHighlightedItems }
      }
      break
    }

    case StateChangeTypes.ToggleButtonKeyDownEnd: {
      const {
        currentDepth, highlightedItems, urlIndex,
      } = state
      const currentItem = highlightedItems[currentDepth]
      if (currentItem) {
        const parentItem = urlIndex[currentItem.parentUrl!]
        const lastIndex = parentItem.items.length - 1
        const lastItem = parentItem.items[lastIndex]
        const newHighlightedItems = findItemTree(
          state.urlIndex, lastItem.url,
        )

        changes = { highlightedItems: newHighlightedItems }
      }
      break
    }

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
