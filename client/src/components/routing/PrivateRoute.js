import React from 'react';
import { Navigate } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';

const PrivateRoute = ({component: Component }) => {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.auth.loading);

  if (loading) return <Spinner /> ;
  if (isAuthenticated) return <Component />;
 
  return <Navigate to="/login" />;
};
 
// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.object.isRequired,
// };
 
export default connect(null)(PrivateRoute);