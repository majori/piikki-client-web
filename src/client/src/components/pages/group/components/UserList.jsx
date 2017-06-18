// @flow
import React from 'react';
import * as _ from 'lodash';

import LoadingIcon from '../../../common/LoadingIcon';

type UserListProps = {
  users: User[];
  loading: boolean;
}

const UserList = (props: UserListProps) => (
  <div className="card user-list">
    {
      (props.loading) ?
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
  </div>
);

export default UserList;
