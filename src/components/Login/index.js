import React from 'react';
import loginInfo from './loginInfo';

export default function Login(props) {
  return (
    <>
      <h1>登录页</h1>
      <button
        onClick={() => {
          loginInfo.login()
          console.log(props.location)
          if(props.location.state){
            props.history.push(props.location.state)
          }else{
            props.history.push('/')
          }
        }}
      >{loginInfo.isLogin ? '退出登录' : '登录'}</button>
    </>
  )
}
