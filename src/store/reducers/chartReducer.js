export default function reducer(state={

    selectedDomain: null,
    zoomDomain: null,

  }, action) {
    switch (action.type) {
      case "CHART_ZOOM": {
        return {...state, selectedDomain: action.payload}
      }
      case "CHART_BRUSH": {
        return {...state, zoomDomain: action.payload}
      }
    }

    return state;
}