import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRent } from '../actions/rents';

const RentButton = ({book, user, addRent}) => {
    console.log(book.id)
    console.log(user)

    const onClick = () => {
        addRent(user.id, book.id, book.bookName, user.name, book.price)
    }
    return (
        <Fragment>
            <button onClick={onClick} class="btn btn-primary">Kirala</button>
        </Fragment>
    )
}

RentButton.propTypes = {
    book: PropTypes.any,
    addRent: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps, {addRent}) (RentButton)
