import * as Action from '../actions/detail'

const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  hasData: false
}

const details = (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_DETAIL:
      return {
        ...state,
        data: action.payload,
        isLoading: true,
        isError: false,
        hasData: false
      }
    case Action.GET_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
        hasData: true
      }
    case Action.GET_DETAIL_FAILED:
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        hasData: false
      }
    default:
      return state
  }
}

export default details
