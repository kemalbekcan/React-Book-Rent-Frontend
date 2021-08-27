import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import {getBooks} from '../actions/books';
import Header from "./Header";
import RentButton from "./RentButton";

const Home = ({books, getBooks}) => {
    useEffect(() => {
        getBooks()
    }, [getBooks])
  return (
    <Fragment>
     <Header />

    <section>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../img/reading.jpg" class="d-block w-100" height="610" width="420" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../img/books.jpg" class="d-block w-100" height="610" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../img/writing.jpg" class="d-block w-100" height="610" width="420" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>

    <section class="caption">
        {books && books.map(book => {
            return <Fragment>
                <div class="book" key={book.id}>
            <img src={book.image} class="img-fluid" alt="" />
            <h1 class="bookName">{book.bookName}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, possimus.</p>
            <RentButton book={book} />
        </div>
            </Fragment>
        })}
    </section>
    </Fragment>
  );
};


const mapStateToProps = (state) => ({
    user: state.auth.user,
    books: state.book.books,
})


export default connect(mapStateToProps, {getBooks}) (Home);
