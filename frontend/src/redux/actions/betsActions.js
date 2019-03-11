import axios from 'axios';
import { FETCH_BETS, FETCH_BETS_SUCCESS, FETCH_BETS_FAILURE } from './types';

const fetchBetsSuccess = response => ({
  type: FETCH_BETS_SUCCESS,
  payload: response,
});

const fetchBetsFailure = err => ({
  type: FETCH_BETS_FAILURE,
  payload: err,
});

export const fetchBets = filter => async (dispatch) => {
  dispatch({ type: FETCH_BETS });
  try {
    const response = await axios.get(`http://localhost:4000/${filter}`);
    dispatch(fetchBetsSuccess(response.data));
  } catch (err) {
    dispatch(fetchBetsFailure(err));
  }
};
