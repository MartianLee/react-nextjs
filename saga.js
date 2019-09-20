/* global fetch */

import { all, call, delay, put, cancel, take, takeLatest, takeEvery, select } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import {productConstants, userConstants, walletConstants, configConstants, alertConstants, metaConstants, assetConstants} from './constants'

import {
  failure,
  loadDataSuccess,
  loadProductDataSuccess,
  loadProductDetailDataSuccess,
  tickClock,
  login,
  getUserInfo,
  loginSuccess,
  getBalance,
  getBalanceSuccess,
  createWalletSuccess,
  sendCoinsSuccess,
  getUserInfoSuccess,
  errorMessage,
  successMessage,
  clearMessage,
  loadAssetsSuccess,
  addTokenToStore
} from './actions'
import Router from 'next/router'
import {getMetaCoinSuccess} from "./actions/metaActions"
import getToken from './util/getToken'

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
    const res = yield fetch(`${configConstants.API_URL}/v1/products/`)
    const productData = yield res.json()
    yield put(loadProductDataSuccess(productData))
  } catch (err) {
    yield put(failure(err))
  }
}

function * loadProductDetailDataSaga (action) {
  try {
    const res = yield fetch(`${configConstants.API_URL}/v1/products/${action.id}`)
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
    console.log(data)
    if (data.detail === 'No active account found with the given credentials') {
      yield put(errorMessage('login error !'))
      yield cancel()
    }
    yield put(loginSuccess({ ...data }))
    yield put(getUserInfo(data.access))
    yield call(Router.push, '/')
    yield put(successMessage('login success!'))
    yield put(localStorage.setItem('token', data.access))
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
    yield put(successMessage('signup success!'))
    yield call(Router.push, '/')
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

function * userVerificationSignupSaga (action) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.data)
    }
    const res = yield fetch(`${configConstants.API_URL}/v1/users/verification/`, requestOptions)
    const data = yield res.json()
    console.log(data)
    // set toast message from data
    yield call(Router.push, '/')
  } catch (err) {
    yield put(failure(err))
  }
}


function * loadUserInfoSaga (action) {
  try {
    const state = yield select()
    const token = state.auth.access
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    }
    const res = yield fetch(`${configConstants.API_URL}/v1/users/info/`, requestOptions)
    const data = yield res.json()
    yield put(getUserInfoSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * passwordResetSaga (action) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.user)
    }
    const res = yield fetch(`${configConstants.API_URL}/v1/users/reset_password/`, requestOptions)
    const data = yield res.json()
    yield call(Router.push, '/')
  } catch (err) {
    yield put(failure(err))
  }
}

function * passwordUpdateSaga (action) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.user)
    }
    const res = yield fetch(`${configConstants.API_URL}/v1/users/verification/password/`, requestOptions)
    const data = yield res.json()
    yield call(Router.push, '/')
  } catch (err) {
    yield put(failure(err))
  }
}

function * userInfoUpdateSaga (action) {
  try {
    const state = yield select()
    const token = state.auth.access
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(action.data.user)
    }
    console.log(action)
    const res = yield fetch(`${configConstants.API_URL}/v1/users/update/`, requestOptions)
    const data = yield res.json()
    yield loadUserInfoSaga(action.data)
    // yield call(Router.push, '/')
  } catch (err) {
    yield put(failure(err))
  }
}

function * alertSuccessSaga (action) {
  try {
    yield delay(2000)
    yield put(clearMessage())
  } catch (err) {
    yield put(failure(err))
  }
}

function * alertErrorSaga (action) {
  try {
    yield delay(2000)
    yield put(clearMessage())
  } catch (err) {
    yield put(failure(err))
  }
}

function * getMetaCoinSaga (action) {
  try {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    const res = yield fetch(`${configConstants.API_URL}/v1/metadata/coin/`, requestOptions)
    const data = yield res.json()
    yield put(getMetaCoinSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * loadAssetsSaga (action) {
  try {
    const state = yield select()
    const token = state.auth.access
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    }
    console.log(action.token)
    const res = yield fetch(`${configConstants.API_URL}/v1/users/asset/`, requestOptions)
    const data = yield res.json()
    yield put(loadAssetsSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * beforeAction () {
  const action = yield take('*')
  const state = yield select()
  if (!state.auth.access) {
    const token = yield call(getToken)
    console.log(token)
    if (!!token && action.type !== userConstants.ADD_TOKEN_TO_STORE) {
      yield put(addTokenToStore(token))
    }
  }
  yield call(console.log, ('action', action))
  yield call(console.log, ('state after', state))
}

function * rootSaga () {
  console.log('Saga Initialized')

  yield takeEvery('*', beforeAction)
  yield all([
    call(runClockSaga),
    // takeLatest(alarmConstants.SHOW_ALARM, showaAlarmSaga),
    takeLatest(userConstants.SIGN_UP, userSignUpSaga),
    takeLatest(userConstants.LOGIN_REQUEST, userLoginSaga),
    takeLatest(userConstants.LOGOUT, userLogoutSaga),
    takeLatest(userConstants.SEND_VERIFICATION_SIGNUP, userVerificationSignupSaga),
    takeLatest(userConstants.GET_USER_INFO, loadUserInfoSaga),
    takeLatest(userConstants.REQUEST_PASSWORD_RESET, passwordResetSaga),
    takeLatest(userConstants.UPDATE_PASSWORD, passwordUpdateSaga),
    takeLatest(userConstants.UPDATE_USER_INFO, userInfoUpdateSaga),
    takeLatest(productConstants.LOAD_PRODUCT_DATA, loadProductDataSaga),
    takeLatest(productConstants.LOAD_PRODUCT_DETAIL_DATA, loadProductDetailDataSaga),
    takeLatest(walletConstants.GET_BALANCE, getWalletBalanceSaga),
    takeLatest(walletConstants.CREATE_WALLET, createWalletSaga),
    takeLatest(walletConstants.SEND_COINS, sendCoinsSaga),
    takeLatest(alertConstants.SUCCESS, alertSuccessSaga),
    takeLatest(alertConstants.ERROR, alertErrorSaga),
    takeLatest(metaConstants.GET_COIN, getMetaCoinSaga),
    takeLatest(assetConstants.LOAD_ASSETS, loadAssetsSaga)
  ])
}

export default rootSaga
