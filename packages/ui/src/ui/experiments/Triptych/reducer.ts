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
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default reducer
