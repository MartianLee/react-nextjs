import { metaConstants } from '../constants'

export function getMetaCoin () {
  return { type: metaConstants.GET_COIN }
}

export function getMetaCoinSuccess (data) {
  return { type: metaConstants.GET_COIN_SUCCESS, data }
}