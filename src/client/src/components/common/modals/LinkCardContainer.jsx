// @flow
import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { createAlternativeLogin } from '../../../actions/api';
import { clearCard } from '../../../actions/app';

import LinkCard from './LinkCard';

const LinkCardContainer = props => <LinkCard {...props} />;

const mapStateToProps = state => ({
  card: state.app.getIn(['card', 'id']),
  username: state.app.getIn(['login', 'username']),
  socket: state.app.getIn(['socket', 'active']),
});

const mapDispatchToProps = {
  createAlternativeLogin,
  clearCard
};

export default connect(mapStateToProps, mapDispatchToProps)(LinkCardContainer);
