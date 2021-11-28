import axios from "axios";

export function getFermenterHistoryData() {
  return function(dispatch) {
    dispatch({type: "FERMENTER_HISTORY_DATA"});
    axios.get('/services/session/history/fermenter/state')
      .then((response) => {
        dispatch({type: "FERMENTER_HISTORY_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FERMENTER_HISTORY_REJECTED", error: err.response.data})
      })
  }
}
