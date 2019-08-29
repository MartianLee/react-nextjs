/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { productConstants } from './constants'
import { userConstants} from "./constants";
import { failure, loadDataSuccess, loadProductDataSuccess, loadProductDetailDataSuccess, tickClock, login, loginSuccess } from './actions'
import Router from "next/router";

es6promise.polyfill()

function * runClockSaga () {
  // yield take(productConstants.START_CLOCK)
  // while (true) {
  //   yield put(tickClock(false))
  //   yield delay(1000)
  // }
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

function * loadProductDetailDataSaga (action) {
  try {
    const res = yield fetch(`https://jsonplaceholder.typicode.com/photos/${action.id}`)
    const productData = yield res.json()
    yield put(loadProductDetailDataSuccess(productData))
  } catch (err) {
    yield put(failure(err))
  }
}

function * userLoginSaga (action) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.user)
    };
    const res = yield fetch('http://localhost:8000/auth/login', requestOptions)
    const data = yield res.json()
    yield put(loginSuccess(data))
    yield call(Router.push, '/' )
    localStorage.setItem('token', data.token);
  } catch (err) {
    yield put(failure(err))
  }
}

function * userLogoutSaga (action) {
  try {
    localStorage.removeItem('token');
  } catch (err) {
    yield put(failure(err))
  }
}


function * rootSaga () {
  yield all([
    call(runClockSaga),
    takeLatest(userConstants.LOGIN_REQUEST, userLoginSaga),
    takeLatest(userConstants.LOGOUT, userLogoutSaga),
    takeLatest(productConstants.LOAD_DATA, loadDataSaga),
    takeLatest(productConstants.LOAD_PRODUCT_DATA, loadProductDataSaga),
    takeLatest(productConstants.LOAD_PRODUCT_DETAIL_DATA, loadProductDetailDataSaga)
  ])
}

export default rootSaga
