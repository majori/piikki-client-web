// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';

import { getLatestTransactions } from '../../../../actions/api';

import LatestTransactions from './LatestTransactions';

type LatestTransactionsContainerProps = {
  getLatestTransactions: Function;
  transactions: Transaction[];
  loading: boolean;
}

class LatestTransactionsContainer extends Component {
  props: LatestTransactionsContainerProps;

  componentWillMount() {
    this.props.getLatestTransactions(moment().subtract(7, 'days'));
  }

  render() {
    return <LatestTransactions {...this.props}/>;
  }
}

const mapStateToProps = (state) => ({
  transactions: state.api.getIn(['transactions', 'results']).toJS(),
  loading: state.api.getIn(['transactions', 'loading']),
});

const mapDispatchToProps = {
  getLatestTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestTransactionsContainer);
