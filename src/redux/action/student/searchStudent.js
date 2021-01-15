export const actionTypes = {
  change:Symbol('change')
}
export function changeAction(newSearchObj){
  return{
    type:actionTypes.change,
    payload:newSearchObj
  }
}