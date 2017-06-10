import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
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
  // This allows to component update when route changes
  // otherwise redirect doesn't work
  pathname: state.routing.location.pathname,
  loggedInUser: state.app.getIn(['login', 'username']),
});

export default connect(mapStateToProps)(PrivateRouteContainer);
