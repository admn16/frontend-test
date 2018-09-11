import { call, takeEvery, put } from 'redux-saga/effects';
import {
  FETCH_COUNTERS,
  UPDATE_COUNTERS,
  INCREMENT,
  DECREMENT,
  DELETE,
  ADD,
} from 'actions/counterActionTypes';
import { UPDATE_TEXT } from 'actions/uiActionTypes';
import * as counterApi from 'services/counterApi';

function* fetchCounters() {
  try {
    const counters = yield call(counterApi.fetchCounters);
    yield put({ type: UPDATE_COUNTERS, payload: counters });
  } catch (ex) {
    console.error(ex);
  }
}

function* incrementCounter({ payload }) {
  try {
    const counters = yield call(counterApi.incrementCounter, payload);
    yield put({ type: UPDATE_COUNTERS, payload: counters });
  } catch (ex) {
    console.error(ex);
  }
}

function* decrementCounter({ payload }) {
  try {
    const counters = yield call(counterApi.decrementCounter, payload);
    yield put({ type: UPDATE_COUNTERS, payload: counters });
  } catch (ex) {
    console.error(ex);
  }
}

function* deleteCounter({ payload }) {
  try {
    const counters = yield call(counterApi.deleteCounter, payload);
    yield put({ type: UPDATE_COUNTERS, payload: counters });
  } catch (ex) {
    console.error(ex);
  }
}

function* addCounter({ payload }) {
  try {
    const counters = yield call(counterApi.addCounter, payload);
    yield put({ type: UPDATE_COUNTERS, payload: counters });
    yield put({ type: UPDATE_TEXT, payload: '' });
  } catch (ex) {
    console.error(ex);
  }
}

export default [
  takeEvery(FETCH_COUNTERS, fetchCounters),
  takeEvery(INCREMENT, incrementCounter),
  takeEvery(DECREMENT, decrementCounter),
  takeEvery(DELETE, deleteCounter),
  takeEvery(ADD, addCounter),
];
