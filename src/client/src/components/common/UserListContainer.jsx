// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../../actions/api';

import UserList from './UserList';

type UserListContainerProps = {
  users: User[];
  loading: boolean;
  getUsers: Function;
}

class UserListContainer extends Component {
  props: UserListContainerProps;

  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    return <UserList users={this.props.users} loading={this.props.loading} />;
  }
}

const mapStateToProps = state => ({
  users: state.api.getIn(['users', 'results']).toJS(),
  loading: state.api.getIn(['users', 'loading']),
});

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
