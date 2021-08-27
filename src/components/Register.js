import React, { Fragment, useState } from 'react';
import Header from './Header';
import { register } from '../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Register = ({register, user}) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    adress: '',
    age: '',
    password: '',
    password_confirmation: ''
  })

  const {name, surname, email, adress, age, password, password_confirmation} = formData;

  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault();
    if(password !== password_confirmation){
      console.log('error')
    }
    else{
      register(name, surname, email, adress, age, password, password_confirmation);
    }
  }

  if(user){
    return <Redirect to='/' />
  }
  

    return (
        <Fragment>
            <Header />
            <section class="container loginForm">
        <form onSubmit={onSubmit}>
            <div class="loginFormBorder">
            <div class="mb-3">
                    <label for="exampleInputName1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputName1" name="name" value={name} onChange={onChange} />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputSurname1" class="form-label">Surname</label>
                    <input type="text" class="form-control" id="exampleInputSurname1" name="surname" value={surname} onChange={onChange} />
                  </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={onChange} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div class="mb-3">
                    <label for="inputAddress">Adress</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="adress" value={adress} onChange={onChange} />
                  </div>
                  <div class="mb-3">
                    <label for="inputAge">Yaş</label>
                    <input type="number" class="form-control" id="inputAge" placeholder="Age" name="age" value={age} onChange={onChange} />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Şifre</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={password} onChange={onChange} />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Şifre</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password_confirmation" value={password_confirmation} onChange={onChange} />
                  </div>
                  
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Üye Ol</button>
            </div>
            
          </form>
    </section>
        </Fragment>
    )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, {register}) (Register)
