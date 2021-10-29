import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose  } from 'redux';
import {createLogger} from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import reducer from './reducers/index'

//Web Sockets
import reduxWebsocket from '@giantmachines/redux-websocket';

const webSocketOptions = {
    reconnectInterval : 1000,
    reconnectOnClose : true
}

// Create the middleware instance.
const reduxWebsocketMiddleware = reduxWebsocket(webSocketOptions);

export default () => {
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(reduxWebsocketMiddleware, thunk, createLogger()))
  );

  return store;
};