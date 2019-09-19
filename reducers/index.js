import { combineReducers } from 'redux'

// import { users } from './users.reducer';
import { alert } from './alert.reducer'
import { product } from './product.reducer'
import { auth } from './auth.reducer'
import { wallet } from './wallet.reducer'
import { meta } from './meta.reducer'

const rootReducer = combineReducers({
  auth,
  alert,
  product,
  wallet,
  meta
})

export default rootReducer
