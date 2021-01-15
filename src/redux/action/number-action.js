import * as actionType from './action-type'

// 得到一个用于操作数字的action创建函数

export function getAddAction(){
  return{
    type:actionType.ADD
  }
}

export function getMinusAction(){
  return{
    type:actionType.MINUS
  }
}

export function getSetAction(num){
  return{
    type:actionType.SET,
    payload:num
  }
}