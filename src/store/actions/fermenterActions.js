import axios from "axios";

export function getFermenterData() {
  return function(dispatch) {
    dispatch({type: "FERMENTER_DATA"});
    axios.get('/services/fermenter')
      .then((response) => {
        dispatch({type: "FERMENTER_DATA_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FERMENTER_DATA_REJECTED", error: err.response.data})
      })
  }
}

export function updateFermenter(config)
{
    return function(dispatch) {
    dispatch({type: "FERMENTER_UPDATE"});
    axios.post("/services/fermenter", config)
      .then((response) => {
        dispatch({type: "FERMENTER_UPDATE_FULFILLED", payload: config})
        dispatch(getFermenterData());
      })
      .catch((err) => {
        dispatch({type: "FERMENTER_UPDATE_REJECTED", error: err.response.data})
      })
  }
}



export function editSchedule()
{
    return function(dispatch) {
      dispatch({type: "FERMENTER_SCHEDULE_EDIT", payload: ''});
  }
}

export function editScheduleCancel()
{
    return function(dispatch) {
      dispatch({type: "FERMENTER_SCHEDULE_EDIT_CANCEL", payload: ''});
  }
}

export function editScheduleRow(e, id, name) {
    return function(dispatch) {
      dispatch({type: "FERMENTER_SCHEDULE_EDIT_ROW", payload: {id:id, name:name, value: e.target.value}});
  }
}

export function removeScheduleRow(id) {
  return function(dispatch) {
    dispatch({type: "FERMENTER_SCHEDULE_REMOVE_ROW", payload: id});
}
}

// export function saveSchedule(data) {
//   return function(dispatch) {
//     dispatch({type: "FERMENTER_SCHEDULE_EDIT_SAVE", payload: 'save'});
// }
// }
