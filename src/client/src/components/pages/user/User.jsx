import React from 'react';

import UserTransactions from './components/UserTransactionsContainer';

const User = () => {
  return (
    <div className="row">
      <div className="col s4">
        <UserTransactions />
      </div>
    </div>
  );
};

export default User;
