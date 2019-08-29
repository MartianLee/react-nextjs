import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { exampleInitialState } from './reducers/product.reducer'
import { authState } from './reducers/auth.reducer'
import rootReducer from "./reducers";
import rootSaga from './saga'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

function configureStore (initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  // console.log(authState);
  // console.log(initialState)
  const store = createStore(
    rootReducer,
    bindMiddleware([sagaMiddleware])
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
