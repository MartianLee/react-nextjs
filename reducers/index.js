import { combineReducers } from 'redux'

// import { users } from './users.reducer';
import { alert } from './alert.reducer'
import { product } from './product.reducer'
import { auth } from './auth.reducer'
import { wallet } from './wallet.reducer'
import { meta } from './meta.reducer'
import { asset } from './asset.reducer'

const rootReducer = combineReducers({
  auth,
  alert,
  product,
  wallet,
  meta,
  asset
})

export default rootReducer
