import {searchStudents} from '../../../services/student'

export const actionTypes = {
  setDatasAndSetTotal:Symbol('setDatas-and-SetTotal'),//设置学生数组和总数
  isLoading:Symbol('isLoading'),
  // saga
  fetchGetStudent:Symbol('fetch-get-student')
}

export function setDatasAndSetTotal(setObj){
  return{
    type:actionTypes.setDatasAndSetTotal,
    payload:setObj
  }
}

export function isLoading(boolean){
  return{
    type:actionTypes.isLoading,
    payload:boolean
  }
}

// thunk
// export function fetchGetStudent(){
//   return async function(dispatch,getState){
//     // console.log(getState().searchStudent)
//     dispatch(isLoading(true))
//     const searchObj = getState().searchStudent;
//     const resp = await searchStudents(searchObj);
//     dispatch(setDatasAndSetTotal(resp))
//     dispatch(isLoading(false))
//   }
// }

// saga
export function fetchGetStudent(){
  return{
    type:actionTypes.fetchGetStudent
  }
}