import { takeLatest } from 'redux-saga/effects'
import { Types } from '../actionTypes'
import { fetchList } from './modalsaga'
const RootSaga = function* mySaga() {
  // yield takeLatest(Types.GET_LIST_INIT, fetchList);
}

export default RootSaga
