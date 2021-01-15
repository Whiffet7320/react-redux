import {takeEvery,put,call,select} from 'redux-saga/effects';
import {actionTypes,isLoading,setDatasAndSetTotal} from '../action/student/searchSetStudent';
import {searchStudents} from '../../services/student'

function* fetchGetStudent(){
  yield put(isLoading(true))
  const state = yield select()//获取到仓库数据
  // console.log(state.studentReducer.searchStudent);
  const searchObj = state.studentReducer.searchStudent
  const resp = yield call(searchStudents,searchObj)
  yield put(setDatasAndSetTotal({
    datas:resp.datas,
    total:resp.cont
  }))
  yield put(isLoading(false))

  console.log('触发了fetchGetStudent',resp);
}

export default function* (){
  yield takeEvery(actionTypes.fetchGetStudent,fetchGetStudent);//监听fetchGetStudent类型
  console.log('fetchGetStudent正在被监听')
}