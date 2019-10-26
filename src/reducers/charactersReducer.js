import * as types from "../actions/types"

const initialState = {
  loading: false,
  result: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_STARTED:
      return { ...state, loading: false }
    case types.FETCH_SUCCED:
      return { ...state, loading: true, result: action.payload }
    case types.FETCH_FAILED:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
