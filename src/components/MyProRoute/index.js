import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import loginInfo from '../Login/loginInfo'

export default function MyProRoute({ children, render, component: MyComponent, ...myProps }) {
  return (
    <Route {...myProps} render={value => {
      // console.log(value,myProps)
      if (loginInfo.isLogin) {
        return <MyComponent />
      } else {
        return <Redirect
          to={{
            pathname: '/login',
            state: value.location.pathname
          }}
        />
      }
    }} />
  )
}
