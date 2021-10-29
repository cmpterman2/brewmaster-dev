import axios from "axios";

export function getBurnerConfig() {
  return function(dispatch) {
    dispatch({type: "BURNER_CONFIG"});
    axios.get('/services/burner')
      .then((response) => {
        dispatch({type: "BURNER_CONFIG_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "BURNER_CONFIG_REJECTED", payload: err})
      })
  }
}

export function updateBurner(config)
{
    return function(dispatch) {
    //dispatch({type: "UPDATE", payload:query});
    axios.post("/services/burner", config)
      .then((response) => {
        dispatch({type: "BURNER_UPDATE_FULFILLED", payload: config})
      })
      .catch((err) => {
        dispatch({type: "BURNER_UPDATE_REJECTED", payload: err})
      })
  }
}



export function getResults() {
  return function(dispatch) {
    dispatch({type: "CHECK_RESULTS"});
    axios.get('/check/results')
      .then((response) => {
        dispatch({type: "CHECK_RESULTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "CHECK_RESULTS_REJECTED", payload: err})
      })
  }
}

export function getHistory() {
  return function(dispatch) {
    dispatch({type: "CHECK_HISTORY"});
    axios.get('/check/history')
      .then((response) => {
        dispatch({type: "CHECK_HISTORY_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "CHECK_HISTORY_REJECTED", payload: err})
      })
  }
}

export function executeCheck(prod) {
  return function(dispatch) {
    dispatch({type: "CHECK_NOW"});
    axios.get('/check/execute?prod='+prod)
      .then((response) => {
        dispatch({type: "CHECK_NOW_FULFILLED", payload: response.data})
        setTimeout(() => dispatch(checkStatus()), 5000);
      })
      .catch((err) => {
        dispatch({type: "CHECK_NOW_REJECTED", payload: err})
      })
  }
}

  export function remove(id) {
  return function(dispatch) {
    dispatch({type: "CHECK_REMOVE"});
    axios.get('/check/remove?id='+id)
      .then((response) => {
        dispatch({type: "CHECK_REMOVE_FULFILLED", payload: response.data});
        dispatch(getHistory());
      })
      .catch((err) => {
        dispatch({type: "CHECK_REMOVE_REJECTED", payload: err})
      })
  }
}