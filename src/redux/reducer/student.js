import * as studentAction from '../action/studentAction';

const initialState = {
  datas: [],
  isLoading: false
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case studentAction.ADDSTUDENT:
      return {
        ...state,
        datas: [...state.datas, payload]
      }
    case studentAction.REMOVESTUDENT:
      return {
        ...state,
        datas: state.datas.filter(ele => ele.id != payload)
      }
    case studentAction.EDITSTUDENT:
      return {
        ...state,
        datas: state.datas.map(ele => ele.id === payload.id ? payload : ele)
      }
    case studentAction.SETSTUDENT:
      return {
        ...state,
        datas: payload
      }
    case studentAction.ISLOADING:
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state
  }
}
