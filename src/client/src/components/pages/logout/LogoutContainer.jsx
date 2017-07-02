import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as _ from 'lodash';

import { logoutUser } from '../../../actions/app';

class LogoutContainer extends React.Component {
  componentWillMount() {
    if (this.props.isLoggedIn) {
      this.props.logoutUser();
    }
  }

  render() {
    return <Redirect to="/login" />;
  }
}

const mapDispatchToProps = {
  logoutUser
};

const mapStateToProps = (state) => ({
  isLoggedIn: !_.isNull(state.app.getIn(['login', 'username'])),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);
