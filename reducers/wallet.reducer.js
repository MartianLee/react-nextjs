import { walletConstants } from '../constants'

export const initialState = { address: '', balance: '', gettingBalance: false, sendingCoins: false, creatingWallet: false }

export function wallet (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case walletConstants.GET_BALANCE_SUCCESS:
      return {
        ...state,
        address: action.data.id,
        balance: action.data.balance
      }
    case walletConstants.CREATE_WALLET_SUCCESS:
      return {
        ...state,
        address: action.data.wallet_address,
        data: action.data
      }
    case walletConstants.SEND_COINS:
      return {
        ...state,
        sendingCoins: true,
        data: action.data
      }
    case walletConstants.SEND_COINS_SUCCESS:
      return {
        ...state,
        sendingCoins: false,
        data: action.data,
        history: action.data.history
      }
    case walletConstants.GET_WALLET_ADDRESS_SUCCESS:
      return {
        ...state,
        address: action.data.wallet_address
      }
    default:
      return state
  }
}
