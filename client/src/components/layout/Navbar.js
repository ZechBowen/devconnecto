import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

const Navbar = ({ logout }) => {
  const authLinks = (
    <ul>
    <li><Link to="/profiles">
        Developers
      </Link>
    </li>
    <li><Link to="/posts">
        Posts
      </Link>
    </li>
    <li><Link to="/dashboard">
      <i className='fas fa-user'></i>
      <span className='hide-sm'>Dashboard</span></Link>
    </li>
    <li>
      <a onClick={logout} href="#!">
        <i className='fas fa-sign-out'></i>{' '}
        <span className='hide-sm'>Logout</span>
      </a>
    </li>
  </ul>
  );

  const guestLinks = (
    <ul>
    <li><Link to="/profiles">
        Developers
      </Link>
    </li>
    <li><Link to="/register">Register</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>
  );

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.auth.loading);


  return (
      <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector</Link>
      </h1>
      { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(null, { logout })(Navbar);
