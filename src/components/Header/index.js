import React from 'react';
import './index.css';

export default function Header() {
  return (
    <div className='header-content'>
      <div className="left">
        <h1>学生管理系统</h1>
      </div>
      <div className="right">
        <span>Admin</span>
        <button
        >登录</button>
      </div>
    </div>
  )
}
