/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { productConstants, userConstants, walletConstants, configConstants } from './constants'

import { failure, loadDataSuccess, loadProductDataSuccess, loadProductDetailDataSuccess, tickClock, login, loginSuccess, getBalance, getBalanceSuccess, createWalletSuccess, sendCoinsSuccess } from './actions'
import Router from 'next/router'

es6promise.polyfill()

function * runClockSaga () {
  // yield take(productConstants.START_CLOCK)
  // while (true) {
  //   yield put(tickClock(false))
  //   yield delay(1000)
  // }
}

// function * showaAlarmSaga (action) {
//   yield take(alarmConstants.SHOW_ALARM)
//   yield put(showAlarm(action.content))
//   yield delay(2000)
//   yield put(closeAlarm()))
// }

function * loadDataSaga () {
  try {
    const res = yield fetch(`${configConstants.TEST_API_URL}/users`)
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * loadProductDataSaga () {
  try {
    const res = yield fetch(`${configConstants.TEST_API_URL}/photos`)
    const productData = yield res.json()
    yield put(loadProductDataSuccess(productData))
  } catch (err) {
    yield put(failure(err))
  }
}

function * loadProductDetailDataSaga (action) {
  try {
    const res = yield fetch(`${configConstants.TEST_API_URL}/photos/${action.id}`)
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
    }
    const res = yield fetch(`${configConstants.API_URL}/v1/token/`, requestOptions)
    const data = yield res.json()
    yield put(loginSuccess({ ...data, ...action.user }))
    yield call(Router.push, '/')
    localStorage.setItem('token', data.access)
  } catch (err) {
    yield put(failure(err))
  }
}

function * userSignUpSaga (action) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.user)
    }
    const res = yield fetch(`${configConstants.API_URL}/v1/users/signup/`, requestOptions)
    const data = yield res.json()
    const user = { email: action.user.email, password: action.user.password }
    yield put(login(user))
  } catch (err) {
    yield put(failure(err))
  }
}

function * userLogoutSaga (action) {
  try {
    localStorage.removeItem('token')
  } catch (err) {
    yield put(failure(err))
  }
}

function * getWalletBalanceSaga (action) {
  try {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.user)
    }
    const res = yield fetch(`${configConstants.API_URL}/wallet/`, requestOptions)
    const data = yield res.json()
    yield put(getBalanceSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * createWalletSaga (action) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.user)
    }
    const res = yield fetch(`${configConstants.API_URL}/wallets/create/`, requestOptions)
    const data = yield res.json()
    yield put(createWalletSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * sendCoinsSaga (action) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.sendInfo)
    }
    console.log(action)
    const res = yield fetch(`${configConstants.API_URL}/wallets/send/`, requestOptions)
    const data = yield res.json()
    yield put(sendCoinsSuccess(data))
    yield delay(10000)
    yield put(getBalance())
  } catch (err) {
    yield put(failure(err))
  }
}

function * rootSaga () {
  yield all([
    call(runClockSaga),
    // takeLatest(alarmConstants.SHOW_ALARM, showaAlarmSaga),
    takeLatest(userConstants.SIGN_UP, userSignUpSaga),
    takeLatest(userConstants.LOGIN_REQUEST, userLoginSaga),
    takeLatest(userConstants.LOGOUT, userLogoutSaga),
    takeLatest(productConstants.LOAD_DATA, loadDataSaga),
    takeLatest(productConstants.LOAD_PRODUCT_DATA, loadProductDataSaga),
    takeLatest(productConstants.LOAD_PRODUCT_DETAIL_DATA, loadProductDetailDataSaga),
    takeLatest(walletConstants.GET_BALANCE, getWalletBalanceSaga),
    takeLatest(walletConstants.CREATE_WALLET, createWalletSaga),
    takeLatest(walletConstants.SEND_COINS, sendCoinsSaga)
  ])
}

export default rootSaga
