export default function reducer(state={
    status: "REDUX_WEBSOCKET::CLOSED",
  }, action) {
    switch (action.type) {
//      case "REDUX_WEBSOCKET::CONNECTING": 
      case "REDUX_WEBSOCKET::CLOSED": 
      case "REDUX_WEBSOCKET::OPEN": {
        return {...state, status: action.type}
      }
    }

    return state;
}