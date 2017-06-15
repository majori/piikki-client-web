import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../../actions/app';

import User from './User';

class UserContainer extends Component {
  componentWillMount() {
    this.props.getUser(this.props.username);
  }

  render() {
    return <User {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  username: state.app.getIn(['login', 'username']),
  user: state.app.get('user').toJS(),
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
