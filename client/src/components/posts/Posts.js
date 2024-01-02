import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect, useSelector } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getPosts } from '../../actions/post'
import PostItem from './PostItem'

const Posts = ({ getPosts }) => {
    useEffect(() => {
        getPosts()
    }, [getPosts])

    const posts = useSelector(state => state.post.posts);
    const loading = useSelector(state => state.auth.loading)

  return (
    loading ? <Spinner /> : (
      <Fragment>
        <h1 className='large text-primary'>Posts</h1>
        <p className='lead'>
          <i className='fas fa-user'> Welcome to the community </i> 
        </p>
        {/* PostForm */}
        <div className='posts'>
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </Fragment>
    )
  )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    //post: PropTypes.object.isRequired
}

// const mapStateToProps = state => ({
//     post: state.post
// })

export default connect(null, { getPosts })(Posts)