export const LOGINSTUDENT = Symbol('login-student');

// 目前登录的学生
export function loginStudent(student){
  return{
    type:LOGINSTUDENT,
    payload:student,
  }
}