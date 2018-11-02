const searchDirectionsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_DIRECTION' :
      return action.directions;
    default:
      return state;
  }
}

export default searchDirectionsReducer;