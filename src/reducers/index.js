import { combineReducers } from 'redux'
import { fromJS } from 'immutable'
import product from './product'
import detail from './detail'

export const initialState = fromJS({
  product: product,
  detail: detail
})

export const reducers = combineReducers({
  product: product,
  detail: detail
})

export default reducers
