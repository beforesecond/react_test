import * as Action from '../actions/products'

const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  hasData: false
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_PRODUCT:
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        hasData: false
      }
    case Action.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
        hasData: true
      }
    case Action.GET_PRODUCT_FAILED:
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

export default products
