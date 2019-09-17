import { userConstants } from '../constants'

export const initialState = { loggedIn: false, accessToken: '', sendingOtp: false }

export function auth (state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      }
    case userConstants.LOGIN_SUCCESS:
      console.log(action)
      return {
        loggedIn: true,
        access: action.auth.access,
        refresh: action.auth.refresh
      }
    case userConstants.LOGIN_FAILURE:
      return {}
    case userConstants.LOGOUT:
      return {
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
      console.log(action.user)
      return {
        loggedIn: true,
        user: {
          id: action.user.email,
          is_active: action.user.is_true
        }
      }
    default:
      return state
  }
}
