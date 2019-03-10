import {
  GET_BETS,
  GET_BETS_SUCCESS,
  GET_BETS_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  data: null,
  errorMessage: '',
};

const betsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BETS:
      return { ...state, loading: true };
    case GET_BETS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_BETS_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default betsReducer;
