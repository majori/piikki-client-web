// @flow
import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';

import PrivateRoute from '../common/PrivateRouteContainer';
import Group from '../pages/group/Group';
import User from '../pages/user/UserContainer';
import Login from '../pages/LoginContainer';


class App extends React.Component {

  componentWillMount() {

  }

  render() {
    return (
      <div className="container">
        <Header />
        <Route path="/group" component={Group} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/user" component={User} />
      </div>
    );
  }
}

export default App;
