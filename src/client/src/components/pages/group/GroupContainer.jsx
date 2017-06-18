// @flow
import React from 'react';
import { connect } from 'react-redux';

import { getGroup } from '../../../actions/app';

import Group from './Group';

type GroupContainerProps = {
  getGroup: Function;
  group: {
    name: string;
  };
}

class GroupContainer extends React.Component {
  props: GroupContainerProps;

  componentWillMount() {
    this.props.getGroup();
  }

  render() {
    return <Group group={this.props.group} />;
  }
}

const mapStateToProps = state => ({
  group: state.app.getIn(['group']).toJS(),
});

const mapDispatchToProps = {
  getGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer);
