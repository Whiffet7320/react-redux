import {getAllStudents} from '../../services/student'

export const ADDSTUDENT = Symbol('add-student');
export const REMOVESTUDENT = Symbol('removes-tudent');
export const EDITSTUDENT = Symbol('edit-student');
export const SETSTUDENT = Symbol('set-student');
export const ISLOADING = Symbol('isLoading');

// 添加
export function addStudentAction(student){
  return{
    type:ADDSTUDENT,
    payload:student,
  }
}

// 删除
export function removeStudentAction(id){
  return{
    type:REMOVESTUDENT,
    payload:id,
  }
}

// 修改
export function editStudentAction(id,student){
  return{
    type:EDITSTUDENT,
    payload:{
      ...student,
      id,
    },
  }
}

// 设置学生数组
export function setStudentAction(studentList){
  return{
    type:SETSTUDENT,
    payload:studentList
  }
}

// 是否正在加载
export function isLoading(boolean){
  return{
    type:ISLOADING,
    payload:boolean
  }
}


export function fetchStudent(){
  return async function(dispatch){
    dispatch(isLoading(true))
    const stus = await getAllStudents()
    console.log(stus)
    dispatch(setStudentAction(stus))
    dispatch(isLoading(false))
  }
}
