import { SAVE_STAKES } from '../actions/types';

const INITIAL_STATE = {};

const betsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_STAKES:
      return { ...action.payload };
    default:
      return state;
  }
};

export default betsReducer;
