import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import rootReducer from './components/reducers/index';
import setAuthToken from './utils/setAuthToken';

const initalState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));

let currentState = store.getState();
 
store.subscribe(() => {
    
  let previousState = currentState;
  currentState = store.getState();
  
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

export default store;