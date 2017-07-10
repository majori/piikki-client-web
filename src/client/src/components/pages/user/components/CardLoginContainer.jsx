import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showModal } from '../../../../actions/modal';

import CardLogin from './CardLogin';

class CardLoginContainer extends Component {
  componentWillMount() {

  }

  render() {
    return <CardLogin {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  loading: state.api.getIn(['user', 'loading']),
});

const mapDispatchToProps = {
  showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(CardLoginContainer);
