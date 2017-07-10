// @flow
import React from 'react';
import * as _ from 'lodash';

import Card from '../../../common/Card';
import LoadingIcon from '../../../common/LoadingIcon';

type UserListProps = {
  users: User[];
  loading: boolean;
}

const UserList = (props: UserListProps) => (
  <Card className="user-list" title="Member saldos">
    {
      (props.loading && _.isEmpty(props.users)) ?
        <LoadingIcon /> :
        (
          <table className="bordered">
            <thead>
              <tr>
                <th>Username</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              { _.map(props.users, user => (
                <tr key={user.username}>
                  <td>{user.username}</td>
                  <td>{user.saldo}</td>
                </tr>
                )
              )}
            </tbody>
          </table>
        )
    }
  </Card>
);

export default UserList;
