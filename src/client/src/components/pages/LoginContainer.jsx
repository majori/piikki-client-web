import React from 'react';
import { connect } from 'react-redux';

import { authenticateUser } from '../../actions/app';

import Login from './Login';

const LoginContainer = props => <Login {...props} />;

const mapStateToProps = (state) => ({
  loggedInUser: state.app.getIn(['login', 'username']),
  error: state.app.getIn(['login', 'error']),
});

const mapDispatchToProps = {
  authenticateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
