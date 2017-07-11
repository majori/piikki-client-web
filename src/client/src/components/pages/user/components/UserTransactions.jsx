// @flow
import React from 'react';
import Card from '../../../common/Card';

import * as _ from 'lodash';

type DefaultProps = {}

type Props = {
  makeTransaction: Function,
  user: {
    username: string;
    saldo: number;
  }
}

type State = {
  amount: number;
}

class UserTransactions extends React.Component<DefaultProps, Props, State> {
  constructor() {
    super();
    this.state = {
      amount: 0,
    };
    this.handleMinusPress = this.handleMinusPress.bind(this);
    this.handlePlusPress = this.handlePlusPress.bind(this);
  }

  handleMinusPress() {
    this.changeAmount(-1);
  }

  handlePlusPress() {
    this.changeAmount(1);
  }

  changeAmount(amount: number) {
    this.setState(_.update(this.state, 'amount', x => x + amount));
    this.makeTransaction();
  }

  makeTransaction = _.debounce(async () => {
    await this.props.makeTransaction(this.props.user.username, this.state.amount);
    this.setState({ amount: 0 });
  }, 2000);

  render() {
    return (
      <Card title="Saldo">
        <div className="center-align">
          <h2>{this.props.user.saldo + this.state.amount}</h2>
        </div>
        <button className="btn" onClick={this.handleMinusPress}>-1</button>
        <button className="btn right" onClick={this.handlePlusPress}>+1</button>
      </Card>
    );
  }
}

export default UserTransactions;
