import React, { Fragment, useEffect } from 'react';
import Header from './Header';
import {getStudents} from '../actions/students';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const StudentsPage = ({getStudents, students, user}) => {
    useEffect(() => {
        getStudents()
    }, [getStudents])
    if(!user.isAdmin){
        return <Redirect to='/' />
    }
    return (
        <Fragment>
            <Header />
<section class="usersList">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Age</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
            {students && students.map(ogren => {
                return <Fragment>
                    <tr key={ogren.id}>
                    <th scope="row">{ogren.id}</th>
                    <td style={{textTransform: 'capitalize'}}>{ogren.name}</td>
                    <td style={{textTransform: 'capitalize'}}>{ogren.surname}</td>
                    <td>{ogren.age}</td>
                    <td><i class="far fa-trash-alt"></i></td>
                </tr>
                    </Fragment>
            })}
                
            </tbody>
        </table>
    </section>
            
            
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    students: state.student.students,
    user: state.auth.user
})

export default connect(mapStateToProps, {getStudents}) (StudentsPage)
