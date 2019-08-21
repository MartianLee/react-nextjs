/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, failure, loadDataSuccess, loadProductDataSuccess, tickClock } from './actions'

es6promise.polyfill()

function * runClockSaga () {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

function * loadDataSaga () {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * loadProductDataSaga () {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/photos')
    const productData = yield res.json()
    yield put(loadProductDataSuccess(productData))
  } catch (err) {
    yield put(failure(err))
  }
}

function * rootSaga () {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.LOAD_PRODUCT_DATA, loadProductDataSaga)
  ])
}

export default rootSaga
