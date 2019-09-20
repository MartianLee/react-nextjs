import { assetConstants } from '../constants'

export function asset (state = { asset: {
  total_asset: 0,
  invest_asset: 0,
  interest_revenue: 0,
  investmentable_asset: 0,
  coins: []
}, message: '', loadingAssets: false }, action) {
  switch (action.type) {
    case assetConstants.LOAD_ASSETS:
      return {
        ...state,
        loadingAssets: true
      }
    case assetConstants.LOAD_ASSETS_SUCCESS:
      console.log(action)
      return {
        ...state,
        asset: action.data
      }
    default:
      return state
  }
}
