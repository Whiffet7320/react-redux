import { actionTypes } from '../../action/number/index';

const initialState = 10

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.add:
      return state + 1
    case actionTypes.minus:
      return state - 1

    default:
      return state
  }
}
