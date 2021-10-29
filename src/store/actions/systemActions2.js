import axios from "axios";

import { connect } from '@giantmachines/redux-websocket';

export function getSystemConfig() {
  return function(dispatch) {
    dispatch({type: "SYSTEM_CONFIG"});
    axios.get('/services/config')
      .then((response) => {
        console.log(response.data);
        dispatch({type: "SYSTEM_CONFIG_FULFILLED", payload: response.data})
        dispatch(connect('ws://'+location.hostname+':'+response.data.port+'/events/'))
      })
      .catch((err) => {
        dispatch({type: "SYSTEM_CONFIG_REJECTED", error: err.response.data})
      })
  }
}

export function setFullScreen(isFull)
{
  console.log('woot');
    return function(dispatch) {
      dispatch({type: "SYSTEM_ISFULL", payload: isFull});
  }
}


