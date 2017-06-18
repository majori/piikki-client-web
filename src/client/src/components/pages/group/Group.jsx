// @flow
import React from 'react';

import UserListContainer from './components/UserListContainer';
import GroupGraphContainer from './components/GroupGraphContainer';

type GroupProps = {
  group: {
    name: string;
  };
};

const Group = (props: GroupProps) => (
  <div className="row group">
    <div className="col s12">
      <div className="card group-header center-align">
        <div className="card-content">
          <h3>{props.group.name}</h3>
        </div>
      </div>
    </div>
    <div className="col s4">
      <UserListContainer />
    </div>
    <div className="col s8">
      <GroupGraphContainer />
    </div>
  </div>
);

export default Group;
