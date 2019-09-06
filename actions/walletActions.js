import { walletConstants } from '../constants';


export function getBalance(user) {
    // const userInfo = { email: user.username }
    return { type: walletConstants.GET_BALANCE }
}

export function getBalanceSuccess(data) {
    data = JSON.parse(data)
    return { type: walletConstants.GET_BALANCE_SUCCESS, data}
}
export function createWallet(user) {
    return { type: walletConstants.CREATE_WALLET }
}

export function createWalletSuccess(data) {
    data = JSON.parse(data)
    return { type: walletConstants.CREATE_WALLET_SUCCESS, data}
}
