import {takeEvery} from 'redux-saga/effects';
import {actionTypes} from '../action/number/index'

function* addListen(){
  console.log('触发了add')
}

function* minusListen(){
  console.log('触发了minus')
}

export default function* sagaTask(){
  //监听一个action类型(不阻塞),被监听时触发第二个参数的函数
  yield takeEvery(actionTypes.add,addListen);
  yield takeEvery(actionTypes.minus,minusListen)
  console.log('add和minus正在被监听')
}