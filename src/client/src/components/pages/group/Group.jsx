// @flow
import React from 'react';

import Card from '../../common/Card';
import UserListContainer from './components/UserListContainer';
import GroupGraphContainer from './components/GroupGraphContainer';
import LatestTransactionsContainer from './components/LatestTransactionsContainer';

type GroupProps = {
  group: {
    name: string;
  };
};

const Group = (props: GroupProps) => (
  <div className="row group">
    <div className="col s12">
      <Card title={props.group.name} biggerHeader />
    </div>
    <div className="col s4">
      <UserListContainer />
    </div>
    <div className="col s8">
      <GroupGraphContainer />
    </div>
    <div className="col s6">
      <LatestTransactionsContainer />
    </div>
  </div>
);

export default Group;
