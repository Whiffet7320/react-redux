import { combineReducers } from 'redux';
import searchStudent from './searchStudent';
import searchSetStudent from './searchSetStudent'

export default combineReducers({
  searchStudent,
  searchSetStudent
})