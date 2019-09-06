import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';
import { ToastsStore } from 'react-toasts';
import type { GetDataAction } from '../../Types/home';
import { getRequest } from '../../utils/request';
import { setData } from './actions';
import { GET_DATA } from './constants';
import { hideLoader, showLoader } from '../Loader/actions';
import endPoints from '../../config/endPoints';
import { DATA_LIST_PAGE_SIZE } from '../../config/constants';
import { selectDataRowsNumber, selectFilter } from './selectors';

function* getData(action: GetDataAction) {
  try {
    const filter = yield select(selectFilter);
    yield put(showLoader(action.type));
    let newStartRow;
    if (action.init) {
      yield put(
        setData([], action.init),
      );
      newStartRow = 1;
    } else {
      newStartRow = (yield select(selectDataRowsNumber)) + 1;
    }
    const { data } = yield call(getRequest, endPoints.DataList(newStartRow, DATA_LIST_PAGE_SIZE,
      filter));
    yield put(hideLoader(action.type));
    yield put(
      setData(data ? data.records : []),
    );
  } catch (error) {
    console.error(error);
    yield put(hideLoader(action.type));
    ToastsStore.error('la récupération des données a echoué');
  }
}


export function* getDataSaga() {
  yield takeLatest(GET_DATA, getData);
}

export default [getDataSaga];
