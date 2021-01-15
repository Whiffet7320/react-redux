import { actionTypes } from '../../action/student/searchSetStudent';

const initialState = {
  datas: [],
  total: 0,
  isLoading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.setDatasAndSetTotal:
      return {
        ...state,
        ...payload
      }
    case actionTypes.isLoading:
      return {
        ...state,
        isLoading:payload
      }

    default:
      return state
  }
}
