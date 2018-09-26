import {fork} from 'redux-saga/effects';
import scenarioSaga from './scenario-saga';
import saveSaga from './save-saga'

export default function* rootSaga() {
  yield [
    fork(scenarioSaga),
    fork(saveSaga)
  ];
}
