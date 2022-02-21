import axios from "axios";

import {useHistory} from "react-router-dom";

export function getSession() {
  return function(dispatch) {
    dispatch({type: "SESSION"});
    axios.get('/services/session')
      .then((response) => {
        dispatch({type: "SESSION_FULFILLED", payload: response.data})
        // dispatch(connect('ws://'+location.hostname+':'+response.data.port+'/events/'))
        // dispatch(useHistory().push("/home"))
      })
      .catch((err) => {
        dispatch({type: "SESSION_REJECTED", error: err.response.data})
      })
  }
}

export function updateSession(config)
{
    return function(dispatch) {
    dispatch({type: "SESSION_UPDATE"});
    axios.post("/services/session/config", config)
      .then((response) => {
        dispatch({type: "SESSION_UPDATE_FULFILLED", payload: config})
        dispatch(getSession());
      })
      .catch((err) => {
        dispatch({type: "SESSION_UPDATE_REJECTED", error: err.response.data})
      })
  }
}

export function undoLastSession()
{
    return function(dispatch) {
    dispatch({type: "SESSION_UNDO"});
    axios.get("/services/session/undo")
      .then((response) => {
        dispatch({type: "SESSION_UNDO_FULFILLED", payload: config})
        dispatch(getSession());
      })
      .catch((err) => {
        dispatch({type: "SESSION_UNDO_REJECTED", error: err.response})
      })
  }
}


