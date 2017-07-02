import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import Header from './Header';

const HeaderContainer = (props) => <Header {...props} />;

const mapStateToProps = state => ({
  loggedIn: !_.isNull(state.app.getIn(['login', 'username'])),
});

export default connect(mapStateToProps)(HeaderContainer);
