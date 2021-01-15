export const actionTypes = {
  add:Symbol('add'),
  minus:Symbol('minus')
}

export function add(){
  return {
    type:actionTypes.add,
  }
}

export function minus(){
  return {
    type:actionTypes.minus,
  }
}