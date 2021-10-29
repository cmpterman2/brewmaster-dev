export function handleZoom(domain) {
    return function(dispatch) {
        dispatch({type: "CHART_ZOOM", payload: domain})
    }
  }

  export function handleBrush(domain) {
    return function(dispatch) {
        dispatch({type: "CHART_BRUSH", payload: domain})
    }
  }
