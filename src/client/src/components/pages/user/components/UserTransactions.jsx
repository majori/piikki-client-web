// @flow
import React from 'react';

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
    <div className="card">
      <div className="card-content">
        <span className="card-title">Saldo</span>
        <div className="center-align">
          <h2>{props.user.saldo}</h2>
        </div>
        <button className="btn" onClick={handleTransaction.bind(this, -1)}>-1</button>
        <button className="btn right" onClick={handleTransaction.bind(this, 1)}>+1</button>
      </div>
    </div>
  );
}

export default UserTransactions;
