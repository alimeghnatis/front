function reducer(
  state, action,
) {
  switch (action.type) {
    case 'SELECT_URL': {
      return { ...state }
    }
    case 'SET_STATE': {
      return {
        ...state,
        focus:action.payload.focus,
        match:action.payload.match,
      }
    }
    case 'TOGGLE_NAV': {
      return {
        ...state,
        focus:state.focus === 1 ? 0 : 1,
      }
    }
    case 'SET_FOCUS': {
      return {
        ...state,
        focus:action.payload,
      }
    }
    case 'SELECT_SECONDARY': {
      const selectedSecondary = state.secondaryRoutes.find((route) => route.id === action.payload)
      if (!selectedSecondary) {
        console.warn(
          'No secondary route found for id:', action.payload,
        )
        return state
      }
      return {
        ...state,
        focus    :2,
        selectedSecondary,
        timestamp:Date.now(),
      }
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default reducer
