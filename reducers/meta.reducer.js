import { metaConstants } from '../constants'

export function meta (state = { coinList: [], selectedCoin: 0 }, action) {
  console.log(action)
  switch (action.type) {
    case metaConstants.GET_COIN_SUCCESS:
      return {
        ...state,
        coinList: action.data.results
      }
    default:
      return state
  }
}
