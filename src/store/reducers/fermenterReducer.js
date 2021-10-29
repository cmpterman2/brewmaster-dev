import _ from "lodash";

export default function reducer(state={
      airLastReading: {
        displayTemp: 0,
        readTime: 0,
      },
      airProbe: 'probe id',
      config:{
        duty: 0,
        target: 0.0,
        mode: 'OFF',
      },
      coolGpio: 'gpio id',
      heatGpio: 'gpio id',
      lastReading: {
        displayTemp: 0,
        readTime: 0,
      },
      probe: 'probe id',
      state: 'OFF',
  }, action) {
    switch (action.type) {
      case "FERMENTER_CONFIG_REJECTED": {
        return {...state, error: action.payload}
      }
      case "FERMENTER_EDIT": {
        const editConfig = _.cloneDeep(state.config);
        editConfig.schedule.forEach((o,i) => o.id = i);
        return {...state, editConfig: editConfig}
      }
      case "FERMENTER_EDIT_CANCEL": {
        return {...state, editConfig: null}
      }
      case "FERMENTER_EDIT_ROW": {

        let {schedule} = state.editConfig;
        const {id, name, value} = action.payload;
        if( id === schedule.length) {
          schedule = [...schedule, {id:id, day:'', target:''}];
        }
        schedule = schedule.map(row => {
          if (row.id === id) {
            return { ...row, [name]: value };
          }
          return row;
        });

        return {...state, editConfig: {...state.editConfig, schedule:schedule}}
      }
      case "FERMENTER_REMOVE_ROW": {

        let {schedule} = state.editConfig;
        const id = action.payload;
        return {...state, editConfig: {...state.editConfig, schedule:schedule.filter( (row) => {return row.id !== id; } )}}
      }

      case "FERMENTER_CONFIG_FULFILLED": {
        const data = action.payload;
        data.config.schedule.forEach((o,i) => o.id = i);
        return {
          ...state,
          ...data,
        }
      }
      case "REDUX_WEBSOCKET::MESSAGE": {

        //Check to see if this is a temp change
        const wsData = JSON.parse(action.payload.event.data);
        const {type, id, data} = wsData;
        if( type === 'TEMP') {
          if( id === 'ferm') {
            return {...state, lastReading:data}
          } else if( id === 'air') {
            return {...state, airLastReading:data}
          }
        }
      }
    }

    return state;
}