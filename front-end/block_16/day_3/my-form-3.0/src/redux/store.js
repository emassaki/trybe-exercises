import { combineReducers, createStore } from 'redux';
import formsReducer from './reducer';

const rootReducer = combineReducers({ formsReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
