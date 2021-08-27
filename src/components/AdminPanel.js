import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { Redirect } from 'react-router-dom';

const AdminPanel = ({user}) => {
    if(!user.isAdmin){
        return <Redirect to='/' />
    }
    return (
        <Fragment>
            <Header />

            <section class="bookDescriptions">
        <div class="card" style={{width: '16rem;'}}>
            <div class="card-body">
                <h5 class="card-title">asdas</h5>
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, at!</p>
            </div>
        </div>
        <div class="card" style={{width: '16rem;'}}>
            <div class="card-body">
                <h5 class="card-title">asdas</h5>
                <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, at!</p>
            </div>
        </div>
        <div class="card" style={{width: '16rem;'}}>
            <div class="card-body">
                <h5 class="card-title">asdas</h5>
                <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, at!</p>
            </div>
        </div>
    </section>
    <hr />
    <section class="counterBookUserDesc">
        <h1 class="counterBookUserDescHeader">En Çok Kitap Kiralayan Öğrenciler</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section class="ageAverageThan">
        <h1 class="ageAverageThanHeader">Yaş Ortalamasından Büyük Olan Öğrencilerin Listesi</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </section>
        </Fragment>
    )
}


const mapStateToProps = (state) => ({
    user: state.auth.user
})


export default connect(mapStateToProps) (AdminPanel)
