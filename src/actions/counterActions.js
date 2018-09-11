import * as actionTypes from 'actions/counterActionTypes';

export const fetchCounters = () => ({
  type: actionTypes.FETCH_COUNTERS,
});

export const incrementCounter = id => ({
  type: actionTypes.INCREMENT,
  payload: id,
});

export const decrementCounter = id => ({
  type: actionTypes.DECREMENT,
  payload: id,
});

export const deleteCounter = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

export const addCounter = title => ({
  type: actionTypes.ADD,
  payload: title,
});
