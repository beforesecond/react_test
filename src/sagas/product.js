import { all, fork, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import * as productsAction from '../actions/products'
import { api } from '../api'
import Constants from '../constants'
const { END_POINT } = Constants

export function* fetchData(action) {
  try {
    const { payload } = action
    const res = yield api(END_POINT.RPODUCT, `get`)
    yield put(productsAction.getProductSuccess(res))
  } catch (error) {
    yield put(productsAction.getProductFailed(error))
  }
}

function* watchFetchData() {
  yield takeEvery(productsAction.GET_PRODUCT, fetchData)
}

function* todo() {
  yield all([
    takeLatest(productsAction.GET_PRODUCT, fetchData),
    fork(watchFetchData)
  ])
}

export default todo
