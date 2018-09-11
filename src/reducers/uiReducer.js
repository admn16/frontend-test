import { UPDATE_TEXT } from 'actions/uiActionTypes';

const defaultState = {
  text: '',
};

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return { ...state, text: action.payload };

    default:
      return state;
  }
};

export default uiReducer;
