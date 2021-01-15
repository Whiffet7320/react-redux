import numberReducer from './number/index';
import studentReducer from './student/index';
import {combineReducers} from 'redux'

// export default (state={},action)=>{
//   const newState = {
//     loginStudent:loginStudentReducer(state.loginStudent,action),
//     student:studentReducer(state.student,action)
//   };
//   return newState;
// }

export default combineReducers({
  numberReducer,
  studentReducer
})