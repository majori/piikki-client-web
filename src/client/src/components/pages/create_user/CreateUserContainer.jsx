// @flow
import React from 'react';
import { connect } from 'react-redux';

import CreateUser from './CreateUser';

type CreateUserProps = {

}

class CreateUserContainer extends React.Component {
  props: CreateUserProps;

  componentWillMount() {

  }

  render() {
    return <CreateUser {...this.props} />;
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserContainer);
