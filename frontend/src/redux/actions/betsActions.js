import axios from 'axios';
import { GET_BETS, GET_BETS_SUCCESS, GET_BETS_FAILURE } from './types';

const getBetsSuccess = response => ({
  type: GET_BETS_SUCCESS,
  payload: response,
});

const getBetsFailure = e => ({
  type: GET_BETS_FAILURE,
  payload: e,
});

export const getBets = filter => async (dispatch) => {
  dispatch({ type: GET_BETS });
  try {
    const response = await axios.get(`http://localhost:4000/${filter}`);
    dispatch(getBetsSuccess(response.data));
  } catch (e) {
    dispatch(getBetsFailure(e));
  }
};

export default 's';
