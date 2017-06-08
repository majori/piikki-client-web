import React from 'react';

import UserListContainer from '../common/UserListContainer';
import GroupGraphContainer from '../common/GroupGraphContainer';

const Group = () => (
  <div className="row">
    <div className="col s6">
      <UserListContainer />
    </div>
    <div className="col s6">
      <GroupGraphContainer />
    </div>
  </div>
);

export default Group;
