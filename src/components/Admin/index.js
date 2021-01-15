import React from 'react';
import Layout from '../Layout';
import Header from '../Header';
import Menu from '../Menu';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../Welcome';
import StudentList from '../Student/StudentList';
import StudentAdd from '../Student/StudentAdd';
import ClassList from '../Class/ClassList';
import ClassAdd from '../Class/ClassAdd';
import StudentDetails from '../Student/StudentDetails';
import MyProRoute from '../MyProRoute';
import Personal from '../MyProRoute/Personal'

export default function Admin() {
  return (
    <Layout
      header={<Header />}
      aside={<Menu />}
    >
      <Switch>
        <Route path='/' exact component={Welcome} />
        <MyProRoute path='/personal' exact component={Personal} />
        <Route path='/student' exact component={StudentList} />
        <Route path='/student/add' exact component={StudentAdd} />
        <Route path='/student/:sNo' exact component={StudentDetails} />
        <Route path='/class' exact component={ClassList} />
        <Route path='/class/add' exact component={ClassAdd} />
      </Switch>
    </Layout>
  )
}
