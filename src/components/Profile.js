import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Profile = () => {
    return (
        <Fragment>
            <h1>Profile Page</h1>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps) (Profile)
