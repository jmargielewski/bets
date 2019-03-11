import betsReducer, { INITIAL_STATE } from '../betsReducer';
import {
  FETCH_BETS,
  FETCH_BETS_SUCCESS,
  FETCH_BETS_FAILURE,
} from '../../actions/types';

describe('Bets Reducer', () => {
  it('handles action of unknown type', () => {
    const action = { type: 'UNKNOWN' };
    const newState = betsReducer(INITIAL_STATE, action);

    expect(newState).toEqual(INITIAL_STATE);
  });

  it('handles action of type FETCH_BETS', () => {
    const action = { type: FETCH_BETS };
    const newState = betsReducer(INITIAL_STATE, action);

    expect(newState).toEqual({ ...INITIAL_STATE, loading: true });
  });

  it('handles action of type FETCH_BETS_SUCCESS', () => {
    const action = {
      type: FETCH_BETS_SUCCESS,
      payload: 'example',
    };
    const newState = betsReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      ...INITIAL_STATE,
      data: action.payload,
      loading: false,
    });
  });

  it('handles action of type FETCH_BETS_FAILURE', () => {
    const action = {
      type: FETCH_BETS_FAILURE,
      payload: 'failure',
    };
    const newState = betsReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      ...INITIAL_STATE,
      errorMessage: action.payload,
      loading: false,
    });
  });
});
