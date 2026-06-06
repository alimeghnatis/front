import {
  useCallback, useMemo,
  useEffect,
  useState,
  useLayoutEffect,
  useReducer,
  useRef,
} from 'react'
import debounce from 'lodash.debounce'
import {
  prepareNavigationData, findItemTree,
} from '../../utils.js'
import type {
  PreparedItem, Item,
} from '../../types.js'
import type {
  State, Action,
  UseNestedNavigationOptions,
  UseNestedNavigationReturn,
  ToggleButtonProps,
  MenuProps,
  ItemProps,
  LabelProps,
} from './types.js'
import {
  StateChangeTypes, OpenOnOptions,
} from './types.js'
import reducer from './reducer.js'

const generateKey = (
  depth: number, index: number,
) => `${depth}-${index}`

export default function useNestedNavigation(
  rootItem: Item,
  options: Partial<UseNestedNavigationOptions> = {},
): UseNestedNavigationReturn {
  const {
    stateReducer, environment = typeof window !== 'undefined' ? window : undefined,
    initialIsOpen = false,
    openOn = OpenOnOptions.click,
    keySearchResetMilliseconds = 700,
    initialUrl,
  } = options

  const menuRef = useRef<HTMLElement | null>(null)
  const toggleButtonRef = useRef<HTMLElement | null>(null)
  const itemRefs = useRef<Map<string, HTMLElement>>(new Map())

  const {
    preparedRoot, nearestNavigableAncestor, navigationIndex,
  } = useMemo(
    () => prepareNavigationData(rootItem),
    [rootItem],
  )

  const getInitialState = useCallback(
    (args: any): State => ({
      isOpen       :args.initialIsOpen,
      selectedItems:args.initialUrl ? findItemTree(
        args.navigationIndex, args.initialUrl,
      ) : [args.preparedRoot],
      highlightedItems:args.initialIsOpen ? [
        args.preparedRoot,
        args.preparedRoot.items[0],
      ] : [],
      rootItem       :args.preparedRoot,
      currentDepth   :args.initialIsOpen ? 1 : 0,
      inputValue     :'',
      keysSoFar      :'',
      navigationIndex:args.navigationIndex,
    }), [],
  )

  const initialState = getInitialState({
    initialIsOpen,
    initialUrl,
    navigationIndex,
    preparedRoot,
  })

  const [
    isInitialized,
    setIsInitialized,
  ] = useState(false)

  const composedReducer = useCallback(
    (
      state: State, action: Action,
    ) => {
      const intermediateState = reducer(
        state, action,
      )
      return stateReducer ? stateReducer(
        intermediateState, action,
      ) : intermediateState
    },
    [stateReducer],
  )

  const [
    state,
    dispatch,
  ] = useReducer(
    composedReducer, initialState,
  )

  useEffect(
    () => {
      if (!isInitialized) {
        setIsInitialized(true)
      } else {
        dispatch({
          // TODO imperfect. Ideally we should check whether the selectedItems and highlightedItems are still valid.
          // For that we would need a more surgical reducer action, eg LoadItems
          type :StateChangeTypes.SetState,
          state:{
            rootItem:preparedRoot,
            navigationIndex,
          },
        })
      }
    }, [preparedRoot],
  )

  // Global Event Handlers
  const toggleMenu = useCallback(
    () => {
      dispatch({ type: StateChangeTypes.FunctionToggleMenu })
    }, [],
  )

  const openMenu = useCallback(
    () => {
      dispatch({ type: StateChangeTypes.FunctionOpenMenu })
    }, [],
  )

  const closeMenu = useCallback(
    () => {
      dispatch({ type: StateChangeTypes.FunctionCloseMenu })
    }, [],
  )

  const reset = useCallback(
    () => {
      dispatch({ type: StateChangeTypes.FunctionReset })
    }, [],
  )

  // Select Item
  const selectItem = useCallback(
    (
      item: PreparedItem, level: number,
    ) => {
      dispatch({
        type:StateChangeTypes.FunctionSelectItem,
        item,
        level,
      })
    }, [],
  )

  // Set Hover Items
  const setHighlightedItems = useCallback(
    (highlightedItems: PreparedItem[]) => {
      dispatch({
        type:StateChangeTypes.FunctionSetHighlightedItems,
        highlightedItems,
      })
    }, [],
  )

  // UNUSED TODO
  const menuMouseLeave = useCallback(
    () => {
      dispatch({ type: StateChangeTypes.MenuMouseLeave })
    }, [],
  )

  const clearKeysSoFar = useCallback(
    debounce(
      () => {
        dispatch({
          type     :StateChangeTypes.FunctionClearKeysSoFar,
          keysSoFar:'',
        })
      }, keySearchResetMilliseconds,
    ), [],
  )

  // Prop Getters
  const getToggleButtonProps = useCallback(
    ({
      depth, ...initialProps
    }: Partial<ToggleButtonProps> & { depth?: number } = {}): ToggleButtonProps => {
      const props = {
        ...initialProps,
        'aria-expanded':state.isOpen,
        'aria-haspopup':'listbox',
        ref            :toggleButtonRef,
      }

      if (openOn === OpenOnOptions.click) {
        props.onClick = (e) => {
          dispatch({
            type:StateChangeTypes.ToggleButtonClick,
            depth,
          })
          if (initialProps.onClick) {
            initialProps.onClick(e)
          }
        }
      } else if (openOn === OpenOnOptions.hover) {
        props.onMouseEnter = (e) => {
          dispatch({
            type:StateChangeTypes.FunctionOpenMenu,
            depth,
          })
          if (initialProps.onMouseEnter) {
            initialProps.onMouseEnter(e)
          }
        }
      }
      return props
    },
    [state.isOpen],
  )

  const getItemProps = useCallback(
    ({
      item, index, level, ...props
    }: Partial<ItemProps> & { item: PreparedItem; index: number; level: number }): ItemProps => {
      const key = item.url || item.key
      return {
        ...props,
        onClick:(e) => {
          e.stopPropagation()
          if (item.disabled) return
          dispatch({
            type:StateChangeTypes.ItemClick,
            item,
          })
          if (props.onClick) {
            props.onClick(e)
          }
        },
        onMouseMove:(e) => {
          e.stopPropagation()
          dispatch({
            type:StateChangeTypes.ItemMouseMove,
            item,
          })
          if (props.onMouseMove) {
            props.onMouseMove(e)
          }
        },
        role           :'option',
        'aria-selected':state.selectedItems.includes(item),
        'aria-disabled':item.disabled,
        ref            :(node: HTMLElement | null) => {
          if (node) {
            itemRefs.current.set(
              key, node,
            )
          } else {
            itemRefs.current.delete(key)
          }
        },
      }
    },
    [state.selectedItems],
  )

  const getMenuProps = useCallback(
    (props: Partial<MenuProps> = {}): MenuProps => ({
      ...props,
      onMouseLeave:(e) => {
        e.stopPropagation()
        if (openOn === OpenOnOptions.click) {
          dispatch({ type: StateChangeTypes.MenuMouseLeave })
        } else if (openOn === OpenOnOptions.hover) {
          dispatch({ type: StateChangeTypes.FunctionCloseMenu })
        }
        if (props.onMouseLeave) {
          props.onMouseLeave(e)
        }
      },
      role             :'listbox',
      'aria-labelledby':props['aria-labelledby'],
      ref              :menuRef,
      tabIndex         :-1,
    }),
    [],
  )

  const handleEnterKeyPress = useCallback(
    () => {
      dispatch({ type: StateChangeTypes.ToggleButtonKeyDownEnter })
      const currentItem = state.highlightedItems[state.currentDepth]
      if (currentItem) {
        const key = currentItem.url || currentItem.key
        const itemNode = itemRefs.current.get(key)
        if (itemNode) {
          const innerLink = itemNode.querySelector('a, button, [role="link"], [role="button"]')
          if (innerLink) {
            (innerLink as HTMLElement).click()
          } else {
            itemNode.click()
          }
        }
      }
    }, [
      dispatch,
      state.currentDepth,
      state.highlightedItems,
    ],
  )

  const handleHover = useCallback(
    (item: PreparedItem) => {
      const key = item.url || item.key
      const itemNode = itemRefs.current.get(key)
      if (itemNode) {
        const innerNode = itemNode.querySelector('a, button, [role="link"], [role="button"]') || itemNode
        innerNode.dispatchEvent(new MouseEvent(
          'mouseover', { bubbles: true },
        ))
      }
    }, [],
  )

  // Local Event Handlers
  const handleKeyDown = useCallback(
    (event) => {
      event.preventDefault()
      if (state.currentDepth !== -1) {
        switch (event.key) {
          case 'ArrowDown':
            dispatch({ type: StateChangeTypes.ToggleButtonKeyDownArrowDown })
            break
          case 'ArrowUp':
            dispatch({ type: StateChangeTypes.ToggleButtonKeyDownArrowUp })
            break
          case 'ArrowLeft':
            dispatch({ type: StateChangeTypes.ToggleButtonKeyDownArrowLeft })
            break
          case 'ArrowRight':
            dispatch({ type: StateChangeTypes.ToggleButtonKeyDownArrowRight })
            break
          case 'Home':
            dispatch({ type: StateChangeTypes.ToggleButtonKeyDownHome })
            break
          case 'End':
            dispatch({ type: StateChangeTypes.ToggleButtonKeyDownEnd })
            break
          case 'PageUp':
            dispatch({ type: StateChangeTypes.ToggleButtonKeyDownPageUp })
            break
          case 'PageDown':
            dispatch({ type: StateChangeTypes.ToggleButtonKeyDownPageDown })
            break
          case 'Enter':
            handleEnterKeyPress()
            break
          case 'Escape':
            dispatch({ type: StateChangeTypes.ToggleButtonKeyDownEscape })
            break
          default:
            if (event.key.length === 1) {
              dispatch({
                type      :StateChangeTypes.FunctionAddKeySoFar,
                inputValue:event.key,
              })

              clearKeysSoFar(dispatch) // Call debounce function to clear keysSoFar
            }
            break
        }
      }
    },
    [
      dispatch,
      state.currentDepth,
      state.highlightedItems,
    ],
  )

  useEffect(
    () => {
      const currentItem = state.highlightedItems[state.highlightedItems.length - 1]
      if (currentItem) {
        // TODO This is duplicated on mouse interaction, it comes from somwhere else
        handleHover(currentItem)
      }
    }, [
      state.highlightedItems,
      handleHover,
    ],
  )

  useLayoutEffect(
    () => {
      const target = menuRef.current
      if (target && state.isOpen) {
        target.focus()
        target.addEventListener(
          'keydown', handleKeyDown,
        )
        return () => {
          target.removeEventListener(
            'keydown', handleKeyDown,
          )
        }
      }
      if (!state.isOpen) {
        target.blur()
      }
    }, [
      handleKeyDown,
      state.isOpen,
    ],
  )
  /*

  const toggleButtonBlur = useCallback(
    () => {
      dispatch({ type: StateChangeTypes.ToggleButtonBlur })
    }, [],
  )

  // Set Input Value
  const setInputValue = useCallback(
    (inputValue: string) => {
      dispatch({
        type:StateChangeTypes.FunctionSetInputValue,
        inputValue,
      })
    }, [],
  )

  // Item Click
  const itemClick = useCallback(
    (item: PreparedItem) => {
      dispatch({
        type:StateChangeTypes.ItemClick,
        item,
      })
    }, [],
  )

  // Item Mouse Move
  const itemMouseMove = useCallback(
    (item: PreparedItem) => {
      dispatch({
        type:StateChangeTypes.ItemMouseMove,
        item,
      })
    }, [],
  )

  const getLabelProps = useCallback(
    (props: LabelProps = {}): LabelProps => ({
      ...props,
      id     :props.id,
      htmlFor:props.htmlFor,
    }),
    [],
  ) */

  return {
    ...state,
    preparedRoot,
    selectItem,
    getToggleButtonProps,
    // @ts-ignore
    getItemProps,
    getMenuProps,
    setHighlightedItems,
    // setInputValue,
    toggleMenu,
    openMenu,
    closeMenu,
    reset,
    menuMouseLeave,
    /*
    itemClick,
    itemMouseMove,
    toggleButtonBlur,
    getLabelProps, */
  }
}
