import { combineReducers } from 'redux';
import counterReducer from 'reducers/counterReducer';
import uiReducer from 'reducers/uiReducer';

export default combineReducers({
  counters: counterReducer,
  ui: uiReducer,
});
