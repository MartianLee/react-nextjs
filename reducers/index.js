import { combineReducers } from 'redux';

// import { users } from './users.reducer';
import { alertReducer } from './alert.reducer'
import { productReducer } from './product.reducer'
import { authReducer } from './auth.reducer'

const rootReducer = combineReducers({
    authReducer,
    // users,
    alertReducer,
    productReducer
});

export default rootReducer;