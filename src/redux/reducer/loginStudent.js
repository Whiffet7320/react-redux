import * as loginStudentAction from '../action/loginStudentAction'

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case loginStudentAction.LOGINSTUDENT:
      return payload
    default:
      return state
  }
}
