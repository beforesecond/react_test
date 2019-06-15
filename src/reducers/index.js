import { combineReducers } from 'redux'
import { fromJS } from 'immutable'
import product from './product'

export const initialState = fromJS({
  product: product
})

export const reducers = combineReducers({
  product: product
})

export default reducers
