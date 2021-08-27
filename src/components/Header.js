import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const Header = ({ logout, user }) => {
  console.log(user);
  return (
    <Fragment>
      
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link to="/" className="navbar-brand">
              Kitap Kirala
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page">
                    Anasayfa
                  </Link>
                </li>
                {user && user ? ("") : (
                  <Fragment>
                    <li class="nav-item">
                  <Link to="/login" class="nav-link" aria-current="page">
                    Öğrenci Girişi
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/register" class="nav-link" aria-current="page">
                    Öğrenci Kaydı
                  </Link>
                </li>
                  </Fragment>
                )}

                {user && user.isAdmin ? (
                  <Fragment>
                    <li class="nav-item">
                  <Link to="/panel" class="nav-link" aria-current="page">
                    Admin Paneli
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/students" class="nav-link" aria-current="page">
                    Öğrenciler
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/authors" class="nav-link" aria-current="page">
                    Yazarlar
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/rents" class="nav-link" aria-current="page">
                    Kitap Kiralayanlar
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/sliders" class="nav-link" aria-current="page">
                    Slider Düzenle
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/" class="nav-link" aria-current="page">
                    Siteye Gör
                  </Link>
                </li>
                  </Fragment>
                ) : ("")}
              </ul>
              <ul>
                <li class="nav-item dropdown dropdownMenus">
                  <button
                    class="nav-link dropdown-toggle bg-light"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{border: 'none'}}
                  >
                    {user ? (
                      <Fragment>
                        <i class="far fa-user"></i> <span style={{textTransform: 'capitalize'}}>{user.name} {user.surname}</span>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <i class="far fa-user"></i> Ziyaretçi
                      </Fragment>
                    )}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link class="dropdown-item" to="/profile">
                        Profil
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/register">
                        Öğrenci Kaydı
                      </Link>
                    </li>
                    {user && user.isAdmin ? (
                      <Fragment>
                        <li>
                      <Link class="dropdown-item" to="/panel">
                        Admin Paneli
                      </Link>
                    </li>
                      </Fragment>
                    ): ("")}
                    
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={() => logout()}>
                        Çıkış Yap
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Header);
