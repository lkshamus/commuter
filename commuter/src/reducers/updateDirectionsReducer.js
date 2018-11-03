const updateDirectionsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_DIRECTIONS' :
      return action.origin;
    default:
      return state;
  }
}

export default updateDirectionsReducer;