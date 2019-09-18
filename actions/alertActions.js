import { alertConstants } from '../constants'

export function successMessage (message) {
  return { type: alertConstants.SUCCESS, message }
}

export function errorMessage (message) {
  return { type: alertConstants.ERROR, message }
}

export function clearMessage () {
  return { type: alertConstants.CLEAR }
}
