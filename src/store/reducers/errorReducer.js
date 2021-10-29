export default function reducer(state={message:null}, action) {

    const {error, type} = action;
    //ActionTypes.RESET_ERROR_MESSAGE
    if (type === 'RESET_ERROR_MESSAGE') {
    	console.log('fock');
    return {...state, message:null};
  } else if (error) {
    return {...state, message:action.error}
  }

    return state;
}