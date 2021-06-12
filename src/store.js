import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  productsReducer,
  filterReducer,
  cartReducer,
  userReducer,
} from './reducers';

const reducer = combineReducers({
  products: productsReducer,
  filter: filterReducer,
  cart: cartReducer,
  user: userReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
