import { walletConstants } from '../constants'

export function getBalance (user) {
  // const userInfo = { email: user.username }
  return { type: walletConstants.GET_BALANCE }
}

export function getBalanceSuccess (data) {
  data = JSON.parse(data)
  return { type: walletConstants.GET_BALANCE_SUCCESS, data }
}

export function getWalletAddress () {
  return { type: walletConstants.GET_WALLET_ADDRESS }
}

export function getWalletAddressSuccess (data) {
  // data = JSON.parse(data)
  return { type: walletConstants.GET_WALLET_ADDRESS_SUCCESS, data }
}

export function createWallet () {
  return { type: walletConstants.CREATE_WALLET }
}

export function createWalletSuccess (data) {
  return { type: walletConstants.CREATE_WALLET_SUCCESS, data }
}

export function sendCoins (sendInfo) {
  return { type: walletConstants.SEND_COINS, sendInfo }
}

export function sendCoinsSuccess (data) {
  data = JSON.parse(data)
  return { type: walletConstants.SEND_COINS_SUCCESS, data }
}
