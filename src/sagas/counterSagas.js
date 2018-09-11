import { call, takeEvery, put } from 'redux-saga/effects';
import counterActions from 'actions/counterActions';
import {
  FETCH_COUNTERS,
  FETCH_COUNTERS_SUCCESS,
} from 'actions/counterActionTypes';
import * as counterApi from 'services/counterApi';

function* fetchCounters() {
  try {
    const counters = yield call(counterApi.fetchCounters);
    yield put({ type: FETCH_COUNTERS_SUCCESS, payload: counters })
  } catch (ex) {
    console.error(ex);
  }
}

export default [
  takeEvery(FETCH_COUNTERS, fetchCounters)
];