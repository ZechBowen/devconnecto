import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles } }) => {
    useEffect(() => {
        getProfiles();
      }, [getProfiles]);

    const loading = useSelector(state => state.auth.loading);

  return (
    <Fragment>
      { loading ? <Spinner /> : <Fragment>
        <h1 className='large text-primary'>Developers</h1>
        <p className='lead'>
            <i className='fab fa-connectdevelop'>Browse and connect with developers</i>
        </p>
        <div className='profiles'>
            { Profiles.length > 0 ? (
                profiles.map(profile => (
                    <ProfileItem key={profile.id} profile={profile} />
                ))
            ) : <h4>No profiles found...</h4>
            }
        </div>
      </Fragment> }
    </Fragment>
  )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    profile: state.profile
  });

export default connect(mapStateToProps, { getProfiles })(Profiles);
