import storeStudent from './store/student';
import * as searchStudentAction from './action/student/searchStudent';
import * as searchSetstudentAction from './action/student/searchSetStudent';

storeStudent.dispatch(searchStudentAction.changeAction({
  key: 'abc',
  limit: 15
}))

storeStudent.dispatch(searchSetstudentAction.fetchGetStudent())

// storeStudent.dispatch(searchSetstudentAction.setDatasAndSetTotal(
//   {
//     datas: [{
//       name: 'lxy',
//       age: 12,
//       sex: 0
//     }, {
//       name: 'lxy2',
//       age: 18,
//       sex: 0
//     }],
//     total: 666
//   }
// ))

// storeStudent.dispatch(searchSetstudentAction.isLoading(true))
