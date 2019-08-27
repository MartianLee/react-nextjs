import { combineReducers } from 'redux';

// import { users } from './users.reducer';
import { alert } from './alert.reducer'
import { product } from './product.reducer'
import { auth } from './auth.reducer'

const rootReducer = combineReducers({
    auth,
    alert,
    product
});

export default rootReducer;