import {fork} from 'redux-saga/effects';
import scenarioSaga from './scenario-saga';

export default function* rootSaga() {
  yield [
    fork(scenarioSaga)
  ];
}
