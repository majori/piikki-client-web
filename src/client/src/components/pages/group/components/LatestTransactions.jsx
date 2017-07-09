// @flow
import React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';

import LoadingIcon from '../../../common/LoadingIcon';

type LatestTransactionProps = {
  transactions: Transaction[];
  loading: boolean;
}

const LatestTransactions = (props: LatestTransactionProps) => {

  return (
    <div className="card">
      <div className="card-title">
        <h5>Last week transactions</h5>
      </div>
      <div className="card-content">
      {
        (props.loading && _.isEmpty(props.transactions)) ?
          <LoadingIcon /> :
          (
            <table className="bordered">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Time</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                { _.map(props.transactions, transaction => (
                  <tr key={transaction.timestamp}>
                    <td>{transaction.username}</td>
                    <td>{moment(transaction.saldo).format('D.M. HH:mm:ss')}</td>
                    <td>{transaction.newSaldo - transaction.oldSaldo}</td>
                  </tr>
                  )
                )}
                {
                  _.isEmpty(props.transactions) && (
                    <tr><td colSpan="3" style={{textAlign: 'center'}}>No transactions</td></tr>
                  )
                }
              </tbody>
            </table>
          )
      }
      </div>
    </div>
  );
};

export default LatestTransactions;
