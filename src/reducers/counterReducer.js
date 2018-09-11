import { UPDATE_COUNTERS } from 'actions/counterActionTypes';

const counterReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_COUNTERS:
      return action.payload;

    default:
      return state;
  }
};

export default counterReducer;
