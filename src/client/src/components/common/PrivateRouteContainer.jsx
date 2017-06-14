import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import * as _ from 'lodash';

const PrivateRouteContainer = ({ component: Component, loggedInUser, ...rest }) => (
  <Route
    {...rest}
    render={props => (!_.isNil(loggedInUser) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    )}
  />
);

const mapStateToProps = (state) => ({
  loggedInUser: state.app.getIn(['login', 'username']),
});

export default withRouter(connect(mapStateToProps)(PrivateRouteContainer));
