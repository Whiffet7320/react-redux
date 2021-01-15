import { createStore,applyMiddleware } from 'redux';
// import * as numberAction from './action/number-action';
// import * as studentAction from './action/studentAction';
// import * as loginStudentAction from './action/loginStudentAction';
import reducer from './reducer';
import logger from 'redux-logger';
import createSaga from 'redux-saga';
import sagaTask from './saga';
import {composeWithDevTools} from 'redux-devtools-extension';//调试工具

const saga = createSaga()

const store = createStore(reducer,composeWithDevTools(applyMiddleware(saga,logger)));

console.log(store.getState())

saga.run(sagaTask)

export default store;
