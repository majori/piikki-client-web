// @flow
import React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';

import Card from '../../../common/Card';
import LoadingIcon from '../../../common/LoadingIcon';

type LatestTransactionProps = {
  transactions: Transaction[];
  loading: boolean;
}

const LatestTransactions = (props: LatestTransactionProps) => {
  return (
    <Card title="Last week transactions">
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
    </Card>
  );
};

export default LatestTransactions;
