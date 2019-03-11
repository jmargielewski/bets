import stakesReducer, { INITIAL_STATE } from '../stakesReducer';
import { SAVE_STAKES } from '../../actions/types';

describe('Stakes Reducer', () => {
  it('handles action of unknown type', () => {
    const action = { type: 'UNKNOWN' };
    const newState = stakesReducer(INITIAL_STATE, action);

    expect(newState).toEqual(INITIAL_STATE);
  });

  it('handles action of type SAVE_STAKES', () => {
    const action = {
      type: SAVE_STAKES,
      payload: { john: '25', andrew: '25.5' },
    };
    const newState = stakesReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      ...action.payload,
    });
  });
});
