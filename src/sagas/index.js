import { all } from 'redux-saga/effects';

import counterSagas from './counterSagas';

export default function* rootSagas() {
  yield all([
    ...counterSagas,
  ]);
}
