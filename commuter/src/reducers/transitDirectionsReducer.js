const transitDirectionsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_DIRECTION' :
      return action.transitDirections;
    default:
      return state;
  }
}

export default transitDirectionsReducer;