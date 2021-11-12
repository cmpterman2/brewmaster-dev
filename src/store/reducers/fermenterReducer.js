import _ from "lodash";

export default function reducer(state={
      state: {
        target: NaN,
        fermTemp: NaN,
        airTemp: NaN,
        deviceState: 'OFF',
        scheduleStart: -1
      },
      config: {
        mode: 'OFF',
        schedule: []
      }
    }, action) {
    switch (action.type) {
      case "FERMENTER_DATA_REJECTED": {
        return {...state, error: action.payload}
      }
      case "FERMENTER_DATA_FULFILLED": {
        const data = action.payload;
        data.config.schedule.forEach((o,i) => o.id = i);
        return {
          ...state,
          ...data,
          editConfig: null
        }
      }
      case "REDUX_WEBSOCKET::MESSAGE": {

        //Check to see if this is a temp change
        const wsData = JSON.parse(action.payload.event.data);
        const {type, time, data} = wsData;
        if( type === 'FERM.STATE') {
          return {...state, state:data}
        } else if ( type === 'FERM.CONFIG') {
          return {...state, config:data}
        }
      }

      case "FERMENTER_SCHEDULE_EDIT": {
        const editConfig = _.cloneDeep(state.config);
        editConfig.schedule.forEach((o,i) => o.id = i);
        return {...state, editConfig: editConfig}
      }
      case "FERMENTER_SCHEDULE_EDIT_CANCEL": {
        return {...state, editConfig: null}
      }
      case "FERMENTER_SCHEDULE_EDIT_ROW": {

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
      case "FERMENTER_SCHEDULE_REMOVE_ROW": {

        let {schedule} = state.editConfig;
        const id = action.payload;
        return {...state, editConfig: {...state.editConfig, schedule:schedule.filter( (row) => {return row.id !== id; } )}}
      }
    }

    return state;
}