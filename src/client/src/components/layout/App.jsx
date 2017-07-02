// @flow
import React from 'react';
import { Route } from 'react-router-dom';

import socket from '../../services/socket';

import Header from './HeaderContainer';

import PrivateRoute from '../common/PrivateRouteContainer';
import Group from '../pages/group/GroupContainer';
import User from '../pages/user/UserContainer';
import Login from '../pages/login/LoginContainer';
import Logout from '../pages/logout/LogoutContainer';
import CreateUser from '../pages/create_user/CreateUserContainer';

socket.on('user', (data) => {
  console.log(data);
});

socket.on('card', (data) => {
  console.log(data);
});

socket.on('reader-error', (data) => {
  console.log(data);
});

const App = () => (
  <div className="container">
    <Header />
    <Route path="/group" component={Group} />
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/create-user" component={CreateUser} />
    <PrivateRoute path="/user" component={User} />
  </div>
);

export default App;
