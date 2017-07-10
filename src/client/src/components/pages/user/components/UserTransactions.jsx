// @flow
import React from 'react';
import Card from '../../../common/Card';

type UserTransactionsProps = {
  makeTransaction: Function,
  user: {
    username: string;
    saldo: number;
  }
}

const UserTransactions = (props: UserTransactionsProps) => {
  const handleTransaction = async (amount: number) => {
    props.makeTransaction(props.user.username, amount);
  };

  return (
    <Card title="Saldo">
      <div className="center-align">
        <h2>{props.user.saldo}</h2>
      </div>
      <button className="btn" onClick={handleTransaction.bind(this, -1)}>-1</button>
      <button className="btn right" onClick={handleTransaction.bind(this, 1)}>+1</button>
    </Card>
  );
};

export default UserTransactions;
