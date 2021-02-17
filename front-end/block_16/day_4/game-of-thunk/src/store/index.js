//importe o método applyMiddleware
import { createStore, applyMiddleware } from 'redux';
//importe o redux-thunk
import { rootReducer } from '../reducer';
import thunk from 'redux-thunk';
//aplique o middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
