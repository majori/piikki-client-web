import React, { Component } from 'react';
import { connect } from 'react-redux';

import { makeTransaction } from '../../../../actions/app';

import UserTransactions from './UserTransactions';

class UserTransactionsContainer extends Component {
  componentWillMount() {

  }

  render() {
    return <UserTransactions {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  loading: state.api.getIn(['user', 'loading']),
});

const mapDispatchToProps = {
  makeTransaction
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTransactionsContainer);
