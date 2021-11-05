import axios from "axios";

import {useHistory} from "react-router-dom";

export function getRecipe() {
  return function(dispatch) {
    dispatch({type: "RECIPE"});
    axios.get('/services/recipe')
      .then((response) => {
        console.log(response);
        dispatch({type: "RECIPE_FULFILLED", payload: response.data})
        // dispatch(connect('ws://'+location.hostname+':'+response.data.port+'/events/'))
        // dispatch(useHistory().push("/home"))
      })
      .catch((err) => {
        dispatch({type: "RECIPE_REJECTED", error: err.response.data})
      })
  }
}


