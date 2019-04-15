import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

// import rootReducer from './reducers'

import productsReducers from './reducers/product-reducers'
import usersReducers from './reducers/user-reducers'

const allRedusers = combineReducers({
  products: productsReducers,
  user: usersReducers,
})

const store = createStore(
  allRedusers,
  {
    products: [{name: 'iPhone'}],
    user: 'Michael',
  },
)

console.log(store.getState())

const updateUserAction = {
  type: 'updateUser',
  payload: {
    name: 'John',
  },
}

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this coms with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
