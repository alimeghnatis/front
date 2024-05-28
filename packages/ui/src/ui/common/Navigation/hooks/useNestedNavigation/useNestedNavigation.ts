import {
  useCallback, useMemo,
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
} from 'react'
import { prepareNavigationData } from '../../utils.js'
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
import { StateChangeTypes } from './types.js'
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
  } = options

  const menuRef = useRef<HTMLElement | null>(null)
  const toggleButtonRef = useRef<HTMLElement | null>(null)
  const itemRefs = useRef<Map<string, HTMLElement>>(new Map())

  const {
    preparedRoot, nearestNavigableAncestor, urlIndex,
  } = useMemo(
    () => prepareNavigationData(rootItem),
    [rootItem],
  )

  const initialState: State = {
    isOpen          :initialIsOpen,
    selectedItems   :[],
    highlightedItems:initialIsOpen ? [
      preparedRoot,
      preparedRoot.items[0],
    ] : [],
    rootItem    :preparedRoot,
    currentDepth:initialIsOpen ? 1 : 0,
    inputValue  :'',
    urlIndex,
  }

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

  // Prop Getters
  const getToggleButtonProps = useCallback(
    (props: Partial<ToggleButtonProps> = {}): ToggleButtonProps => ({
      ...props,
      onClick:(e) => {
        dispatch({ type: StateChangeTypes.ToggleButtonClick })
        if (props.onClick) {
          props.onClick(e)
        }
      },
      'aria-expanded':state.isOpen,
      'aria-haspopup':'listbox',
      ref            :toggleButtonRef,
    }),
    [state.isOpen],
  )

  const getItemProps = useCallback(
    ({
      item, index, level, ...props
    }: Partial<ItemProps> & { item: PreparedItem; index: number; level: number }): ItemProps => {
      const key = generateKey(
        level, index,
      )
      return {
        ...props,
        onClick:(e) => {
          e.stopPropagation()
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
        dispatch({ type: StateChangeTypes.MenuMouseLeave })
        if (props.onMouseLeave) {
          props.onMouseLeave(e)
        }
      },
      role             :'listbox',
      'aria-labelledby':props['aria-labelledby'],
      ref              :menuRef,
    }),
    [],
  )

  // Local Event Handlers
  const handleKeyDown = useCallback(
    (event) => {
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
            dispatch({ type: StateChangeTypes.ToggleButtonKeyDownEnter })
            break
          case 'Escape':
            dispatch({ type: StateChangeTypes.ToggleButtonKeyDownEscape })
            break
          default:
            if (event.key.length === 1) {
              dispatch({
                type      :StateChangeTypes.ToggleButtonKeyDownCharacter,
                inputValue:event.key,
              })
            }
            break
        }
      }
    },
    [
      dispatch,
      state.currentDepth,
    ],
  )

  useLayoutEffect(
    () => {
      const target = menuRef.current
      if (target) {
        target.addEventListener(
          'keydown', handleKeyDown,
        )
        return () => {
          target.removeEventListener(
            'keydown', handleKeyDown,
          )
        }
      }
    }, [handleKeyDown],
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
