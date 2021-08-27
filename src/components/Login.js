import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from '../actions/auth';
import {Redirect} from 'react-router-dom';

const Login = ({loginUser, user}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData;

  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  }

  if(user){
    return <Redirect to='/' />
  }

  
    return (
        <Fragment>

    <section class="container loginForm">
        <form onSubmit={onSubmit}>
            <div class="loginFormBorder">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={onChange} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Şifre</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={password} onChange={onChange} />
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Giriş Yap</button>
            </div> 
          </form>
    </section>
        </Fragment>
    )
}

Login.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, {loginUser}) (Login)
