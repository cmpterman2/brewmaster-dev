import { combineReducers } from "redux";

import brew from "./brewReducer";
import socket from "./websocketReducer";
import system from "./systemReducer";
import error from "./errorReducer";
import fermenter from "./fermenterReducer";
import historyReducer from "./historyReducer";
import chart from "./chartReducer";

export default combineReducers({
  brew,
  socket,
  system,
  error,
  fermenter,
  history:historyReducer,
  chart

    })
//        routing: routerReducer,
