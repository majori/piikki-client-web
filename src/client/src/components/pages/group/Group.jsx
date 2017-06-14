import React from 'react';

import UserListContainer from './components/UserListContainer';
import GroupGraphContainer from './components/GroupGraphContainer';

const Group = () => (
  <div className="row">
    <div className="col s4">
      <UserListContainer />
    </div>
    <div className="col s8">
      <GroupGraphContainer />
    </div>
  </div>
);

export default Group;
