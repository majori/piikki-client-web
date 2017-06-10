// @flow
import React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import { Redirect } from 'react-router-dom';
import * as _ from 'lodash';

type LoginProps = {
  authenticateUser: Function,
  loggedInUser: string,
};

const Login = (props: LoginProps) => {
  const fromURL = _.get(props, 'location.state.from', { pathname: '/user' });

  const handleSubmit = ({ username, password }) => {
    props.authenticateUser(username, password);
  };

  return (_.isEmpty(props.loggedInUser)) ? (
    <div>
      <LocalForm onSubmit={handleSubmit}>
        <Control.text model=".username" placeholder="Username" />
        <Control model=".password" type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </LocalForm>
    </div>
  ) : <Redirect to={fromURL} />;
};

export default Login;
