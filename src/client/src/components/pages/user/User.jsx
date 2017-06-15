import React from 'react';

import UserTransactions from './components/UserTransactionsContainer';

const User = (props) => {
  return (
    <div className="row">
      <div className="col s4">
        <UserTransactions user={props.user} />
      </div>
    </div>
  );
};

export default User;
