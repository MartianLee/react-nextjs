import { combineReducers } from 'redux';

// import { authentication } from './authentication.reducer';
// import { users } from './users.reducer';
// import { alert } from './alert.reducer';
import { product } from './product.reducer'

const rootReducer = combineReducers({
    // authentication,
    // users,
    // alert
    product
});

export default rootReducer;