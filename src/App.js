import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AdminPanel from './components/AdminPanel';
import Profile from './components/Profile';
import StudentsPage from './components/StudentsPage';
import AuthorPage from './components/AuthorPage';
import SliderPage from './components/SliderPage';
import Rents from './components/Rents';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <Route path='/students' component={StudentsPage} />
            <Route path='/authors' component={AuthorPage} />
            <Route path='/sliders' component={SliderPage} />
            <Route path='/rents' component={Rents} />
            <Route path='/panel' component={AdminPanel} />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}
