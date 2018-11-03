const searchDirectionsReducer = (state = {}, action) => {
  // console.log('searchDirectionsReducer', action.type)
  switch(action.type) {
    case 'SET_DIRECTION' :
      return action.directions;
    default:
      return state;
  }
}

export default searchDirectionsReducer;