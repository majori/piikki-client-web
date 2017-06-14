import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../../../actions/api';

import UserTransactions from './UserTransactions';

class UserTransactionsContainer extends Component {
  componentWillMount() {
    this.props.getUser(this.props.user);
  }

  render() {
    return <UserTransactions {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  user: state.app.getIn(['login', 'username']),
  saldo: state.api.getIn(['user', 'results', 'saldo']),
  loading: state.api.getIn(['user', 'loading']),
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTransactionsContainer);
