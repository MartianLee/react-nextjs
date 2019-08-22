import { productConstants } from '../constants'

export const exampleInitialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
  productData: null,
}

export function productReducer (state = exampleInitialState, action) {
  // console.log(state, action)
  switch (action.type) {
    case productConstants.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      }

    case productConstants.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 }
      }

    case productConstants.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 }
      }

    case productConstants.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count }
      }

    case productConstants.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data }
      }

    case productConstants.LOAD_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        ...{ productData: action.data.slice(0,100) }
      }

    case productConstants.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light }
      }

    default:
      return state
  }
}
