import { combineReducers } from 'redux';
import nbaReducer from './reducer_NBATeams';
import ActiveTeam from './reducer_active_team';

const rootReducer = combineReducers({
  teams: nbaReducer,
  activeTeam: ActiveTeam
});

export default rootReducer;
