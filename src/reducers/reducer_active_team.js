//state argument is not application state, only state that this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
  case 'TEAM_SELECTED':
      return action.payload;
  }

  return state
}
