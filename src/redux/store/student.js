import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import studentReducer from '../reducer/student/index';
import createSaga from 'redux-saga';
import sagaTask from '../saga/student';

// thunk
// export default createStore(studentReducer,applyMiddleware(thunk,logger))

// saga
const saga = createSaga()
const store = createStore(studentReducer,applyMiddleware(saga,logger));
saga.run(sagaTask);
export default store;
