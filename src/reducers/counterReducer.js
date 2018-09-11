import * as types from 'actions/counterActionTypes';

const counterReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_COUNTERS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default counterReducer;