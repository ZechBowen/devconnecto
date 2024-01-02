import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect, useSelector } from 'react-redux'
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import { Link } from 'react-router-dom';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({ getCurrentProfile, deleteAccount }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  //const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.auth.loading);
  const profile = useSelector(state => state.profile.profile);
  const user = useSelector(state => state.auth.user);

  return loading && profile === null ? <Spinner /> : <Fragment>
    <h1 className='large text-primary'>Dashboard</h1>
    <p className='lead'>
      <i className='fas fa-user'></i> Welcome { user && user.name}
    </p>
    {profile !== null ? (
      <Fragment>
        <DashboardActions />
        <Experience experience={profile.experience}/>
        <Education education={profile.education} />

        <div className='my-2'>
          <button className='btn btn-danger' onClick={() => deleteAccount()}>
            <i className='fas fa-user-minus'></i> Delete My Account
          </button>
        </div>
      </Fragment> 
    ):( 
      <Fragment>
        <p>You have not yet set up a profile, please add some info</p>
        <Link to='/create-profile' className='btn btn-primary my-1' >
          Create Profile
        </Link>
      </Fragment> )}
  </Fragment>
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

export default connect(null, { getCurrentProfile, deleteAccount })(Dashboard);
