// @flow
import React from 'react';
import * as _ from 'lodash';

type UserListProps = {
  users: User[];
  loading: boolean;
}

const UserList = (props: UserListProps) => (
  <div className="user-list white z-depth-1">
    {
      (props.loading) ?
        (
          <div className="loading-icon center-align">
            <div className="preloader-wrapper active">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div><div className="gap-patch">
                  <div className="circle" />
                </div><div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
          </div>
        ) :
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
