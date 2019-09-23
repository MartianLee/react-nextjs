import { assetConstants } from '../constants'

export function successMessage (selectedCoin) {
  return { type: assetConstants.UPDATED_SELECTED_COIN, selectedCoin }
}

export function loadAssets () {
  return { type: assetConstants.LOAD_ASSETS }
}

export function loadAssetsSuccess (data) {
  return { type: assetConstants.LOAD_ASSETS_SUCCESS, data }
}
