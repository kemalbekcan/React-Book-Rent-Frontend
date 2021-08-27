import React, { Fragment, useEffect, useState } from 'react';
import Header from './Header';
import { getUser, addAuthor, deleteAuthor } from '../actions/authors'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AuthorPage = ({getUser, authors, addAuthor, deleteAuthor, user}) => {
    useEffect(() => {
        getUser()
    }, [getUser])

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        age: '',
        birthday: '',
        deathday: ''
    })

    const {name, surname, age, birthday, deathday} = formData;

    const onChange = (e) =>
        setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = (e) => {
        e.preventDefault();
        addAuthor(name, surname, age, birthday, deathday);
    }

    if(!user.isAdmin){
        return <Redirect to='/' />
    }

    return (
        <Fragment>
            <Header />
            <section class="authorList">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Age</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Deathday</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Update</th>
                </tr>
            </thead>
            <tbody>
                {authors && authors.map(authorList => {
                    
                    return <Fragment>
                    <tr key={authorList.id}>
                    <th scope="row">{authorList.id}</th>
                    <td style={{textTransform: 'capitalize'}}>{authorList.name}</td>
                    <td style={{textTransform: 'capitalize'}}>{authorList.surname}</td>
                    <td>{authorList.age}</td>
                    <td>{authorList.birthday}</td>
                    <td>{authorList.deathday}</td>
                    <td onClick={() => deleteAuthor(authorList.id)}><i class="far fa-trash-alt"></i></td>
                    <td><i class="far fa-edit"></i></td>
                </tr>
                    </Fragment>
                })}
                
            </tbody>
        </table>
    </section>
    <section class="addUser">
        <form onSubmit={onSubmit}>
            <div class="mb-3">
                <label for="authorName" class="form-label">Yazar Adı</label>
                <input type="text" class="form-control" id="authorName" placeholder="Yazar Adı" name="name" value={name} onChange={onChange} />
              </div>
              <div class="mb-3">
                <label for="authorSurname" class="form-label">Yazar Soyadı</label>
                <input type="text" class="form-control" id="authorSurname" placeholder="Yazar Soyadı" name="surname" value={surname} onChange={onChange} />
              </div>
              <div class="mb-3">
                <label for="authorAge" class="form-label">Yazar Yaşı</label>
                <input type="number" class="form-control" id="authorAge" placeholder="Yazar Yaşı" name="age" value={age} onChange={onChange} />
              </div>
              <div class="mb-3">
                <label for="authorBirthday" class="form-label">Doğum Tarihi</label>
                <input type="date" class="form-control" id="authorBirthday" name="birthday" value={birthday} onChange={onChange} />
              </div>
              <div class="mb-3">
                <label for="authorDeathOfDay" class="form-label">Ölüm Tarihi</label>
                <input type="date" class="form-control" id="authorDeathOfDay" name="deathday" value={deathday} onChange={onChange} />
              </div>
              <button type="submit" class="btn btn-primary">Kaydet & Güncelle</button>
        </form>
    </section>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    authors: state.author.authors,
    user: state.auth.user
})

export default connect(mapStateToProps, {getUser, addAuthor, deleteAuthor}) (AuthorPage)
