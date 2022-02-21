export default function reducer(state={

      config:{
        target: NaN,
        mode: 'OFF',
      },
      state: {
        temp: NaN,
      }
    }, action) {
    switch (action.type) {
      // case "BREW_CONFIG_REJECTED":
      // case "BREW_STATE_REJECTED": {
      //   return {...state, error: action.payload}
      // }
      case "BREW_CONFIG_FULFILLED": {

        return {
          ...state,
          config:action.payload
        }
      }
      case "BREW_STATE_FULFILLED": {
        return {
          ...state,
          state:action.payload
        }
      }
      case "REDUX_WEBSOCKET::MESSAGE": {

        //Check to see if this is a temp change
        console.log(action.payload.message);
        const wsData = JSON.parse(action.payload.message);
        const {type, time, data} = wsData;
        if( type === 'BREW.STATE') {
          return {...state, state:data}
        } else if ( type === 'BREW.CONFIG') {
          return {...state, config:data}
        } else {
          return state;
        }
      }
    }

    return state;
}