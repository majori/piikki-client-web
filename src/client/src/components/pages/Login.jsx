// @flow
import React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import { Redirect } from 'react-router-dom';
import * as _ from 'lodash';

type LoginProps = {
  authenticateUser: Function;
  loggedInUser: string;
  error: boolean;
};

const Login = (props: LoginProps) => {
  const fromURL = _.get(props, 'location.state.from', { pathname: '/' });

  const handleSubmit = ({ username, password }) => {
    props.authenticateUser(username, password);
  };

  return (_.isEmpty(props.loggedInUser)) ? (
    <div className="row">
      <div className="col s6 offset-s3">
        <LocalForm onSubmit={handleSubmit}>
          <Control.text model=".username" required placeholder="Username" />
          <Control model=".password" required type="password" placeholder="Password" />
          <button className="waves-effect waves-light btn" type="submit">Login</button>
        </LocalForm>
        { props.error && (
          <div>
            <p>Wrong username or password</p>
          </div>
        )}
      </div>
    </div>
  ) : <Redirect to={fromURL} />;
};

export default Login;
