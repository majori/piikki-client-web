// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';

import { getParsedGroupSaldos } from '../../../../selectors/saldoSelector';
import { getDailyGroupSaldos } from '../../../../actions/api';

import GroupGraph from './GroupGraph';

type GroupGraphContainerProps = {
  getDailyGroupSaldos: Function;
  groupSaldos: any[];
  loading: boolean;
}

class GroupGraphContainer extends Component {
  props: GroupGraphContainerProps;

  componentWillMount() {
    this.props.getDailyGroupSaldos(moment().subtract(30, 'days'));
  }

  render() {
    const { groupSaldos, loading } = this.props;
    return <GroupGraph groupSaldos={groupSaldos} loading={loading} />;
  }
}

const mapStateToProps = state => ({
  groupSaldos: getParsedGroupSaldos(state).toJS(),
  loading: state.api.getIn(['groupSaldos', 'loading']),
});

const mapDispatchToProps = {
  getDailyGroupSaldos,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupGraphContainer);
