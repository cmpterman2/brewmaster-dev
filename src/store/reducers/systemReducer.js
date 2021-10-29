export default function reducer(state={
    config:{},
    isFull:false,
    error: null,
  }, action) {
    switch (action.type) {
      case "SYSTEM_CONFIG_REJECTED": {
        return {...state, error: action.payload}
      }
      case "SYSTEM_CONFIG_FULFILLED": {
        const data = action.payload;
        return {
          ...state,
          config:action.payload,
          error: null,
        }
      }
      case "SYSTEM_ISFULL": {
        console.log("isFull");
        console.log(action.payload);
        return {...state, isFull: action.payload}
      }

    }

    return state;
}