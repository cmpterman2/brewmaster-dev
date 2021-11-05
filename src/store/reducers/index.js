import { combineReducers } from "redux";

import brew from "./brewReducer";
import socket from "./websocketReducer";
import system from "./systemReducer";
import error from "./errorReducer";
import fermenter from "./fermenterReducer";
import historyReducer from "./historyReducer";
import chart from "./chartReducer";
import session from "./sessionReducer"

export default combineReducers({
  brew,
  socket,
  system,
  error,
  fermenter,
  history:historyReducer,
  chart,
  session

    })
//        routing: routerReducer,
