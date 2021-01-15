import React from 'react';
import Admin from './components/Admin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

import { Provider } from 'react-redux';
import store from './redux/index'
import StudentSearch from './components/react-redux/StudentSearch'

export default function App() {
  // return (
  //   <BrowserRouter>
  //     <Switch>
  //       <Route path='/login' exact component={Login} />
  //       <Route path='/' component={Admin} />
  //     </Switch>
  //   </BrowserRouter>
  // )
  return (
    <Provider store={store}>
      <StudentSearch />
    </Provider>
  )
}
