const walkingDirectionsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_DIRECTION' :
      return action.walkingDirections;
    default:
      return state;
  }
}

export default walkingDirectionsReducer;