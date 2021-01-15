import React, { Component } from 'react'

export default class StudentSearchBar extends Component {
  constructor(props){
    super(props)
    const def = {
      sex: -1,
      key: ''
    }
    this.state = Object.assign({},def,this.props.defaultValue)
  }
  radioChange = e => {
    this.setState({
      sex: +e.target.value
    })
  }
  searchClick = ()=>{
    this.props.onSearch && this.props.onSearch(this.state)
  }
  render() {
    return (
      <div className='student-searchBar'>
        关键字：<input type="text" value={this.state.key} onChange={e=>{
          this.setState({
            key:e.target.value
          })
        }} />
        性别：
        <label><input onChange={this.radioChange} checked={this.state.sex === -1} type="radio" name="sex" value={-1} />不限</label>
        <label><input onChange={this.radioChange} checked={this.state.sex === 0} type="radio" name="sex" value={0} />男</label>
        <label><input onChange={this.radioChange} checked={this.state.sex === 1} type="radio" name="sex" value={1} />女</label>
        <button onClick={this.searchClick}>查询</button>
      </div>
    )
  }
}
