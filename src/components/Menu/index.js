import React from 'react';
import './index.css';
import {Link} from 'react-router-dom'

export default function Menu() {
  return (
    <ul className='aside-menu'>
      <li><Link to="/student">学生列表</Link></li>
      <li><Link to="/student/add">添加学生</Link></li>
      <li><Link to="/class">课程列表</Link></li>
      <li><Link to="/class/add">添加课程</Link></li>
      <li><Link to="/personal">个人中心</Link></li>
    </ul>
  )
}
