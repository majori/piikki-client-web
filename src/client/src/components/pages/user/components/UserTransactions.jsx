import React from 'react';

const UserTransactions = (props) => (
  <div className="card">
    <div className="card-content">
      <span className="card-title">Saldo</span>
      <div className="center-align">
        <h2>{props.saldo}</h2>
      </div>
    </div>
  </div>
);

export default UserTransactions;
