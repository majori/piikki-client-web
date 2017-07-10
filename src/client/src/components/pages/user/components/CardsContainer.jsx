import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showModal } from '../../../../actions/modal';

import Cards from './Cards';

class CardsContainer extends Component {
  componentWillMount() {

  }

  render() {
    return <Cards {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  loading: state.api.getIn(['user', 'loading']),
});

const mapDispatchToProps = {
  showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
