import { userConstants } from '../constants'

export const initialState = { loggedIn: false, accessToken: '', sendingOtp: false, friendReferCode: '' }

export function auth (state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user
      }
    case userConstants.LOGIN_SUCCESS:
      console.log(action)
      return {
        ...state,
        loggedIn: true,
        access: action.auth.access,
        refresh: action.auth.refresh
      }
    case userConstants.LOGIN_FAILURE:
      return {}
    case userConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: {},
        token: null
      }
    case userConstants.SEND_OTP_SUCCESS:
      return {
        sendingOtp: false,
        user: {},
        otpStatus: action.otp.status
      }
    case userConstants.GET_USER_INFO_SUCCESS:
      if(action.user && action.user.code !== 'token_not_valid') {
        return {
          ...state,
          loggedIn: true,
          friendReferCode: action.user.refer_code,
          user: {
            id: action.user.email,
            firstName: action.user.first_name,
            lastName: action.user.last_name,
            is_active: action.user.is_true
          }
        }
      }
    case userConstants.ADD_TOKEN_TO_STORE:
      if(!!action.token) {
        return {
          ...state,
          loggedIn: true,
          access: action.token,
          // refresh: action.auth.refresh
        }
      }
      return
    case userConstants.ADD_REFER_CODE_TO_STORE:
      return {
        friendReferCode: action.referCode
      }
    default:
      return state
  }
}
