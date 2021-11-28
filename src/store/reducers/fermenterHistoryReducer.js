import _ from "lodash";

import simplify from "./simplify";

export default function reducer(state={
      ferm : [], 
      target : [],
      air : [],
      
      // state: {
      //   target: NaN,
      //   fermTemp: NaN,
      //   airTemp: NaN,
      //   deviceState: 'OFF',
      //   scheduleStart: -1
      // },
      // config: {
      //   mode: 'OFF',
      //   schedule: []
      // }
    }, action) {
    switch (action.type) {
      case "FERMENTER_HISTORY_REJECTED": {
        return {...state, error: action.payload}
      }
      case "FERMENTER_HISTORY_FULFILLED": {
        const payload = action.payload;
        
        let ferm = [];
        let target = [];
        let air = [];
        payload.forEach((o,i) => {
          ferm.push( { x: o.time, y: o.data.fermTemp})
          target.push( {x: o.time, y: o.data.target})
          air.push({x: o.time, y: o.data.airTemp})
      
        });
        ferm = simplify(ferm, .08, false);
        target = simplify(target, .08, false);
        air = simplify(air, .08, false);
        return {
          ...state, 
          ferm,
          target,
          air

        }
      }
      case "REDUX_WEBSOCKET::MESSAGE": {

        //Check to see if this is a temp change
        const wsData = JSON.parse(action.payload.event.data);
        const {type, time, data} = wsData;
        const {ferm, target, air} = state;

        if( type === 'FERM.STATE') {
          return {...state, ferm:[...ferm, {x: time, y: data.fermTemp}], target:[...target, {x:time, y:data.target}], air:[...air, {x:time, y:data.airTemp}]}
        } 
      }

      // case "FERMENTER_SCHEDULE_EDIT": {
      //   const editConfig = _.cloneDeep(state.config);
      //   editConfig.schedule.forEach((o,i) => o.id = i);
      //   return {...state, editConfig: editConfig}
      // }
      // case "FERMENTER_SCHEDULE_EDIT_CANCEL": {
      //   return {...state, editConfig: null}
      // }
      // case "FERMENTER_SCHEDULE_EDIT_ROW": {

      //   let {schedule} = state.editConfig;
      //   const {id, name, value} = action.payload;
      //   if( id === schedule.length) {
      //     schedule = [...schedule, {id:id, day:'', target:''}];
      //   }
      //   schedule = schedule.map(row => {
      //     if (row.id === id) {
      //       return { ...row, [name]: value };
      //     }
      //     return row;
      //   });

      //   return {...state, editConfig: {...state.editConfig, schedule:schedule}}
      // }
      // case "FERMENTER_SCHEDULE_REMOVE_ROW": {

      //   let {schedule} = state.editConfig;
      //   const id = action.payload;
      //   return {...state, editConfig: {...state.editConfig, schedule:schedule.filter( (row) => {return row.id !== id; } )}}
      // }
    }

    return state;
}