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


