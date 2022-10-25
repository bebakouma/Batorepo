import { createDefaultState, MarketplaceState } from './state';
import { AnyAction, applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { devEnvironment } from '../common/environment';

/*
By adding actionSanitizer and stateSanitizer, we clear out large payloads from redux tools since it is slowing development.
More info below:
Application state or actions payloads are too large making Redux DevTools serialization slow and consuming a lot of memory.
See https://git.io/fpcP5 on how to configure it.
*/
const actionSanitizer = (action: AnyAction) => {
  return action;
};
const stateSanitizer = (state: MarketplaceState) => state;

const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers =
  (reduxDevTools && reduxDevTools({ actionSanitizer, stateSanitizer })) || compose;

const configureStore = (initialState = createDefaultState()) =>
  createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, ...(devEnvironment ? [logger] : []))),
  );

export default configureStore;
