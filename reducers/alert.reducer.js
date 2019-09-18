import { alertConstants } from '../constants'

export function alert (state = { type: '', message: '', status: false }, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
        status: true
      }
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
        status: true
      }
    case alertConstants.CLEAR:
      return {}
    default:
      return state
  }
}
