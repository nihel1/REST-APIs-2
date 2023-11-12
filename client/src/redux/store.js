import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

// Set up Redux DevTools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store with middleware and DevTools extension
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;


//bouton info with route for another page 