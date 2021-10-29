export function resetError() {
  return function(dispatch) {
    dispatch({type: "RESET_ERROR_MESSAGE"});
  }
}