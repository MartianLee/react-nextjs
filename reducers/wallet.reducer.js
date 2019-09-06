import { walletConstants } from '../constants'

export const initialState = { address: '', balance: ''}

export function wallet (state = initialState, action) {
    switch (action.type) {
        case walletConstants.GET_BALANCE_SUCCESS:
            return {
                address: action.data.id,
                balance: action.data.balance
            }
        case walletConstants.CREATE_WALLET_SUCCESS:
            return {
                address: action.data.wallet.id,
                balance: action.data.wallet.balance,
                data: action.data
            }
        default:
            return state
    }
}

