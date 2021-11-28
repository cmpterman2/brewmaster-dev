import axios from "axios";

export function getBurnerConfig() {
  return function(dispatch) {
    dispatch({type: "BURNER_CONFIG"});
    axios.get('/services/burner')
      .then((response) => {
        dispatch({type: "BURNER_CONFIG_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "BURNER_CONFIG_REJECTED", error: err.response.data})
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
        dispatch(getBurnerConfig());
      })
      .catch((err) => {
        dispatch({type: "BURNER_UPDATE_REJECTED", error: err.response.data})
      })
  }
}

export function getFermenterConfig() {
  return function(dispatch) {
    dispatch({type: "FERMENTER_CONFIG"});
    axios.get('/services/fermenter')
      .then((response) => {
        dispatch({type: "FERMENTER_CONFIG_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FERMENTER_CONFIG_REJECTED", error: err.response.data})
      })
  }
}

export function updateFermenter(config)
{
    return function(dispatch) {
    //dispatch({type: "UPDATE", payload:query});
    axios.post("/services/fermenter", config)
      .then((response) => {
        dispatch({type: "FERMENTER_UPDATE_FULFILLED", payload: config})
        dispatch(getFermenterConfig());
      })
      .catch((err) => {
        dispatch({type: "FERMENTER_UPDATE_REJECTED", error: err.response.data})
      })
  }
}


export function editFermenter()
{
  console.log('yo');
    return function(dispatch) {
      dispatch({type: "FERMENTER_EDIT", payload: 'yo'});
  }
}

export function editCancel()
{
  console.log('yo2');
    return function(dispatch) {
      dispatch({type: "FERMENTER_EDIT_CANCEL", payload: 'yo'});
  }
}

export function editRow(e, id, name) {
    return function(dispatch) {
      dispatch({type: "FERMENTER_EDIT_ROW", payload: {id:id, name:name, value: e.target.value}});
  }
}

export function removeRow(id) {
  return function(dispatch) {
    dispatch({type: "FERMENTER_REMOVE_ROW", payload: id});
}
}

export function saveSchedule(data) {
  console.log(data);
  return function(dispatch) {
    dispatch({type: "FERMENTER_EDIT_SAVE", payload: 'save'});
}
}

export function sendFile(file)
{
    return function(dispatch) {
    //dispatch({type: "UPDATE", payload:query});
    axios.post("/services/brew/upload", file)
      .then((response) => {
        //dispatch({type: "FERMENTER_UPDATE_FULFILLED", payload: config})
        //dispatch(getFermenterConfig());
      })
      .catch((err) => {
        //dispatch({type: "FERMENTER_UPDATE_REJECTED", error: err, payload: err})
      })
  }
}