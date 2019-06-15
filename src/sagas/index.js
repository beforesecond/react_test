import { all, fork } from 'redux-saga/effects'
import product from './product'
function* rootSagas() {
  yield all([
    fork(product)
    //fork(todo2),
    //fork(todo3)
  ])
}

export default rootSagas
