export default function reducer(state={

    config:{
      phase : 'NONE',
      mode : 'PAUSED'
    },
  }, action) {
    switch (action.type) {
      case "SESSION_REJECTED": {
        return {...state, error: action.payload}
      }
      case "SESSION_FULFILLED": {
        // const data = action.payload;
        // const history = state.burner.history;
        return {
          ...state,
          config : action.payload,
          error: null,
        }
      }
      case "REDUX_WEBSOCKET::MESSAGE": {

        //Check to see if this is a temp change
        // console.log(action.payload.message);
        // const wsData = JSON.parse(action.payload.message);
        // const {type, id, data} = wsData;
        // const {burner} = state;
        // const {history} = burner;
        // if( type === 'TEMP' && id === 'burner') {
        //     return {...state, burner:{...burner, lastReading:data, history:[...history,data]}}
        // }
      }
    }

    return state;
}