import React from 'react'
import StudentSearchBar from '../Student/StudentSearchBar';
import { connect } from 'react-redux';
import { changeAction } from '../../redux/action/student/searchStudent';
import StudentTable from '../Student/StudentTable';
import { fetchGetStudent } from '../../redux/action/student/searchSetStudent';
import StudentPager from '../Pager';
import store from '../../redux/index'

store.dispatch(fetchGetStudent())//页面一加载先获取一次学生数据

let mapStateToProps = state => {
  return {
    defaultValue: {
      key: state.studentReducer.searchStudent.key,
      sex: state.studentReducer.searchStudent.sex
    }
  }
}
let mapDispatchToProps = dispatch => {
  return {
    onSearch: searchObj => {
      searchObj.page = 1
      // console.log(searchObj)
      dispatch(changeAction(searchObj))
      dispatch(fetchGetStudent())
    }
  }
}
// 连接搜索框
const SearchBar = connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar)

mapStateToProps = state => {
  return {
    stus: state.studentReducer.searchSetStudent.datas,
  }
}
// 连接学生表格
const StuTable = connect(mapStateToProps)(StudentTable);

mapStateToProps = state => {
  return {
    current: state.studentReducer.searchStudent.page,
    total: state.studentReducer.searchSetStudent.total,
    limit: state.studentReducer.searchStudent.limit,
    panelNumber: 5,
  }
}
mapDispatchToProps = dispatch => {
  return {
    onPageChange: page => {
      dispatch(changeAction({page:page}))
      dispatch(fetchGetStudent())
    }
  }
}
// 连接分页
const Pager = connect(mapStateToProps,mapDispatchToProps)(StudentPager)


export default function StudentSearch() {
  return (
    <>
      <SearchBar />
      <StuTable />
      <Pager />
    </>
  )
}