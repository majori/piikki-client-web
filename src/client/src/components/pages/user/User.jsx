// @flow
import React from 'react';

import UserTransactions from './components/UserTransactionsContainer';

type UserProps = {
  user: {
    username: string;
    saldo: number;
  }
}

const User = (props: UserProps) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card group-header center-align">
          <div className="card-content">
            <h3>{props.user.username}</h3>
          </div>
        </div>
      </div>
      <div className="col s4">
        <UserTransactions user={props.user} />
      </div>
    </div>
  );
};

export default User;
