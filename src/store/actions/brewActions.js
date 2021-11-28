import axios from "axios";

export function getBrewConfig() {
  return function(dispatch) {
    dispatch({type: "BREW_CONFIG"});
    axios.get('/services/brew/config')
      .then((response) => {
        dispatch({type: "BREW_CONFIG_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "BREW_CONFIG_REJECTED", error: err.response.data})
      })
  }
}

export function getBrewState() {
  return function(dispatch) {
    dispatch({type: "BREW_STATE"});
    axios.get('/services/brew/state')
      .then((response) => {
        dispatch({type: "BREW_STATE_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "BREW_STATE_REJECTED", error: err.response.data})
      })
  }
}
