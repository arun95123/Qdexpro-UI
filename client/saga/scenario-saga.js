import {takeEvery, put, call} from 'redux-saga/effects';
import {GET_SCENARIO} from '../actions/types';
import { getScenarioData } from '../api/scenario'

export const getScenario = function* () {
  try {
    const scenarioData = yield call(getScenarioData);
    console.log(scenarioData)
    // yeild put()
  }
  catch(error){

  }
};

export default function* scenarioSaga() {
  yield takeEvery(GET_SCENARIO, getScenario);
}
