import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header';
import { getBooks, addBook } from '../actions/books'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Rents = ({books, getBooks, addBook, user }) => {

    useEffect(() => {
        getBooks()
    }, [getBooks])

    const [formData, setFormdata] = useState({
        bookName: '',
        barcodeNo: '',
        pageNumber: '',
        image: '',
        price: ''
    })

    const {bookName, barcodeNo, pageNumber, image, price} = formData;

    const onChange = (e) =>
        setFormdata({...formData, [e.target.name]: e.target.value})

    const onSubmit = (e) => {
        e.preventDefault();
        addBook(bookName, barcodeNo, pageNumber, image, price)
    }

    if(!user.isAdmin){
        return <Redirect to='/' />
    }

    return (
        <Fragment>
            <Header />
             <section class="usersRent">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section class="usersNoRent">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    </section>


    <section class="usersRent">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Kitap İsmi</th>
                    <th scope="col">Barkod No</th>
                    <th scope="col">Sayfa Sayısı</th>
                    <th scope="col">Fiyat</th>
                </tr>
            </thead>
            <tbody>
            {books && books.map(book => {
                return <Fragment>
                    <tr key={book.id}>
                   <th scope="row">{book.id}</th>
                   <td>{book.bookName}</td>
                   <td>{book.barcodeNo}</td>
                   <td>{book.pageNumber}</td>
                   <td>{book.price}TL</td>
               </tr>
                </Fragment>
            })}
            </tbody>
        </table>
    </section>


    <section class="container loginForm">
        <form onSubmit={onSubmit}>
            <div class="loginFormBorder">
            <div class="mb-3">
                    <label for="bookName" class="form-label">Kitap İsmi</label>
                    <input type="text" class="form-control" id="bookName" name="bookName" value={bookName} onChange={onChange} />
                  </div>
                  <div class="mb-3">
                    <label for="barcodeNo" class="form-label">Barkod No</label>
                    <input type="text" class="form-control" id="barcodeNo" name="barcodeNo" value={barcodeNo} onChange={onChange} />
                  </div>
                <div class="mb-3">
                    <label for="pageNumber" class="form-label">Sayfa Sayısı</label>
                    <input type="number" class="form-control" id="pageNumber" name="pageNumber" value={pageNumber} onChange={onChange} />
                  </div>
                  <div class="mb-3">
                    <label for="image">Resim Linki</label>
                    <input type="text" class="form-control" id="image" placeholder="İmage" name="image" value={image} onChange={onChange} />
                  </div>
                  <div class="mb-3">
                    <label for="price">Fiyat</label>
                    <input type="text" class="form-control" id="price" placeholder="Book Price" name="price" value={price} onChange={onChange} />
                  </div>
                  
                  <button type="submit" class="btn btn-primary">Üye Ol</button>
            </div>
            
          </form>
    </section>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    books: state.book.books,
    user: state.auth.user
})

export default connect(mapStateToProps, {getBooks, addBook}) (Rents)
