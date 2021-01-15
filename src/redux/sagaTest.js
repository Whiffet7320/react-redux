import storeNumber from './store/number';
import * as numberAction from './action/number/index';
import storeSearchSetStudent from './store/student';
import * as searchSetStudentAction from './action/student/searchSetStudent'

storeNumber.dispatch(numberAction.minus())
storeNumber.dispatch(numberAction.add())
storeNumber.dispatch(numberAction.add())

storeSearchSetStudent.dispatch(searchSetStudentAction.fetchGetStudent())