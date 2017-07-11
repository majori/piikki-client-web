// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';

import logo from '../../assets/img/piikki-logo-title.png';

type HeaderProps = {
  loggedIn: boolean;
}

class Header extends Component {
  props: HeaderProps;

  componentWillMount() {
    // $('.button-collapse').sideNav();
  }

  render() {
    const links = [
      <Link to="/group"><i className="material-icons">group</i></Link>,
      <Link to="/user"><i className="material-icons">person</i></Link>,
    ];

    if (this.props.loggedIn) {
      links.push(<Link to="/logout"><i className="material-icons">exit_to_app</i></Link>);
    }

    return (
      <nav className="header">
        <div className="nav-wrapper">
          <Link className="brand-logo" to="/group">
            <img alt="Piikki" src={logo} />
          </Link>
          <ul className="right hide-on-med-and-down">
            {_.map(links, (link, i) => (<li key={i}>{link}</li>))}
          </ul>
          <ul className="side-nav" id="nav-mobile">
            {_.map(links, (link, i) => (<li key={i}>{link}</li>))}
          </ul>
          <a href="#!" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    );
  }
}


export default Header;
