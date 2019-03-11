import {
  FETCH_BETS,
  FETCH_BETS_SUCCESS,
  FETCH_BETS_FAILURE,
} from '../actions/types';

export const INITIAL_STATE = {
  loading: false,
  data: null,
  errorMessage: '',
};

const betsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BETS:
      return { ...state, loading: true };
    case FETCH_BETS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_BETS_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default betsReducer;
