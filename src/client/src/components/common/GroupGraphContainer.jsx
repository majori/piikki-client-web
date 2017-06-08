import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';
import * as _ from 'lodash';

import { getParsedGroupSaldos } from '../../selectors/saldoSelector';
import { getDailyGroupSaldos } from '../../actions/api';

import GroupGraph from './GroupGraph';

class GroupGraphContainer extends Component {
  componentWillMount() {
    this.props.getDailyGroupSaldos(moment().subtract(7, 'days'));
  }

  render() {
    const { groupSaldos } = this.props;
    return <GroupGraph groupSaldos={groupSaldos} />;
  }
}

const mapStateToProps = (state) => ({
  groupSaldos: getParsedGroupSaldos(state).toJS(),
});

const mapDispatchToProps = {
  getDailyGroupSaldos,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupGraphContainer);
