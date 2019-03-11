import { SAVE_STAKES } from '../actions/types';

export const INITIAL_STATE = {};

const stakesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_STAKES:
      return { ...action.payload };
    default:
      return state;
  }
};

export default stakesReducer;
