import { combineReducers } from 'redux';
import betsReducer from './betsReducer';
import stakesReducer from './stakesReducer';

const reducer = combineReducers({
  bets: betsReducer,
  stakes: stakesReducer,
});

export default reducer;
