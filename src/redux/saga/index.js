import { takeLatest } from 'redux-saga/effects'
import { Types } from '../actionTypes'
import { fetchList } from './pagging'
const RootSaga = function* mySaga() {
  yield takeLatest(Types.GET_LIST_INIT, fetchList);
}

export default RootSaga
