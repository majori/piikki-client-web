// @flow
import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';

import Group from '../pages/Group';
import User from '../pages/User';

class App extends React.Component {

  componentWillMount() {

  }

  render() {
    return (
      <div className="container">
        <Header />
        <Route path="/group" component={Group} />
        <Route path="/user" component={User} />
      </div>
    );
  }
}

export default App;
