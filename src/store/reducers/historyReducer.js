export default function reducer(state={

    history:{
      enabled:false,
      burner:[],
      ferm:[],
      air:[],
      chartableBurner:[],
      chartableFerm:[],
      chartableAir:[]
    },
  }, action) {
    switch (action.type) {
      case "BURNeER_CONFIG_REJECTED": {
        return {...state, error: action.payload}
      }
      case "BURNeER_CONFIG_FULFILLED": {
        const data = action.payload;
        const history = state.burner.history;
        return {
          ...state,
          burner:{...action.payload, history:history, chartableBurner:chartableBurner, chartableAir:chartableAir, chartableFerm:chartableFerm},
          error: null,
        }
      }
      case "REDUX_WEBSOCKET::MESSAGE": {

        //Check to see if this is a temp change
        const wsData = JSON.parse(action.payload.event.data);
        const {type, id, data} = wsData;
        const {history} = state;
        const {burner, chartableBurner, chartableAir, chartableFerm, ferm, air} = history;
        if( type === 'TEMP' && id === 'burner') {
            return {...state, history:{...history, burner:[...burner,data], chartableBurner:[...chartableBurner, {x: new Date(data.readTime), y: data.displayTemp}]}}
        }
        if( type === 'TEMP') {
          if( id === 'ferm') {
            return {...state, history:{...history, burner:[...burner,data], chartableFerm:[...chartableFerm, {x: new Date(data.readTime), y: data.displayTemp}]}}
          } else if( id === 'air') {
            return {...state, history:{...history, burner:[...burner,data], chartableAir:[...chartableAir, {x: new Date(data.readTime), y: data.displayTemp}]}}
          }
        }
      }
    }

    return state;
}