import {createStore,applyMiddleware} from 'redux';
import numberReducer from '../reducer/number/index';
import createSaga from 'redux-saga';
import logger from 'redux-logger';
import numberSaga from '../saga/number'

const saga = createSaga();//创建一个saga的中间件

numberSaga()

const store = createStore(numberReducer,applyMiddleware(saga,logger))

saga.run(numberSaga)//启动saga任务

export default store;