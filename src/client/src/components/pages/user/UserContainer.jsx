import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from './User';

class UserContainer extends Component {
  componentWillMount() {

  }

  render() {
    return <User user={this.props} />;
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
