import { productConstants } from '../constants'

export function failure (error) {
    return {
        type: productConstants.FAILURE,
        error
    }
}

export function increment () {
    return { type: productConstants.INCREMENT }
}

export function decrement () {
    return { type: productConstants.DECREMENT }
}

export function reset () {
    return { type: productConstants.RESET }
}

export function loadData () {
    return { type: productConstants.LOAD_DATA }
}

export function loadProductData () {
    return { type: productConstants.LOAD_PRODUCT_DATA }
}

export function loadDataSuccess (data) {
    return {
        type: productConstants.LOAD_DATA_SUCCESS,
        data
    }
}

export function loadProductDataSuccess (data) {
    return {
        type: productConstants.LOAD_PRODUCT_DATA_SUCCESS,
        data
    }
}

export function loadProductDetailData (id) {
    return { type: productConstants.LOAD_PRODUCT_DETAIL_DATA, id }
}

export function loadProductDetailDataSuccess (data) {
    return {
        type: productConstants.LOAD_PRODUCT_DETAIL_DATA_SUCCESS,
        data
    }
}


export function startClock () {
    return { type: productConstants.START_CLOCK }
}

export function tickClock (isServer) {
    return {
        type: productConstants.TICK_CLOCK,
        light: !isServer,
        ts: Date.now()
    }
}
