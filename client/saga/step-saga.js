import {takeEvery, put, call} from 'redux-saga/effects';
import {GET_SCRIPT} from '../actions/types';
import { getSeleniumScript } from '../api/step';
import {showScript} from '../actions'

export const getStepScript = function* (action) {
  try {
    console.log(action.data);
    const seleniumScript = yield call(getSeleniumScript,action.data);
    console.log(seleniumScript);
    yield put(showScript(seleniumScript));
  }
  catch(error){
    //HANDLE ERROR HERE
  }
};

export default function* stepSaga() {
  yield takeEvery(GET_SCRIPT, getStepScript);
}
