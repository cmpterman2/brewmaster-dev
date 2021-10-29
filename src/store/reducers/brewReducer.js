export default function reducer(state={

    burner:{
      config:{
        duty: 0,
        target: 0.0,
        mode: 'OFF',
      },
      gpio: 'gpio id',
      lastReading: {
        displayTemp: 0,
        readTime: 0,
      },
      history:[],
      probe: 'probe id',
    },
  }, action) {
    switch (action.type) {
      case "BURNER_CONFIG_REJECTED": {
        return {...state, error: action.payload}
      }
      case "BURNER_CONFIG_FULFILLED": {
        const data = action.payload;
        const history = state.burner.history;
        return {
          ...state,
          burner:{...action.payload, history:history},
          error: null,
        }
      }
      case "REDUX_WEBSOCKET::MESSAGE": {

        //Check to see if this is a temp change
        console.log(action.payload.message);
        const wsData = JSON.parse(action.payload.message);
        const {type, id, data} = wsData;
        const {burner} = state;
        const {history} = burner;
        if( type === 'TEMP' && id === 'burner') {
            return {...state, burner:{...burner, lastReading:data, history:[...history,data]}}
        }
      }
    }

    return state;
}