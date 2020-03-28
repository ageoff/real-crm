import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import createEncryptor from 'redux-persist-transform-encrypt'
import thunk from 'redux-thunk'

// Reducers
import user from './user'

const encryptor = createEncryptor({
  secretKey: 'spot-lager-extra',
})

const config = {
  key: 'root',
  transforms: [encryptor],
  storage,
}

const reducers = persistCombineReducers(config, {
  user,
})

const configureStore = (env, callback) => {
  const middleware = [thunk]

  const con = {}

  if (env !== 'production') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    con.store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))
  } else {
    con.store = createStore(reducers, applyMiddleware(...middleware))
  }

  con.persistor = persistStore(con.store, null, callback)
  return con
}

export default configureStore
