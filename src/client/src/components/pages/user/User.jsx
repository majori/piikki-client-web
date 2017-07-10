// @flow
import React from 'react';

import Card from '../../common/Card';
import UserTransactions from './components/UserTransactionsContainer';
import CardLogin from './components/CardLoginContainer';

type UserProps = {
  user: {
    username: string;
    saldo: number;
  };
}

const User = (props: UserProps) => {
  return (
    <div className="row">
      <div className="col s12">
        <Card title={props.user.username} biggerHeader />
      </div>
      <div className="col s4">
        <UserTransactions user={props.user} />
      </div>
      <div className="col s4">
        <CardLogin />
      </div>
    </div>
  );
};

export default User;
