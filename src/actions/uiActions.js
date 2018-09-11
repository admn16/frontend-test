import * as actionTypes from 'actions/uiActionTypes';

export const updateText = text => ({
  type: actionTypes.UPDATE_TEXT,
  payload: text,
});
