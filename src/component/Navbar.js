import React, { useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Logo from '../assets/images/Rectangle 127.png'
import search from '../assets/images/fi_search.png'
import list from '../assets/images/fi_list.png'
import bell from '../assets/images/fi_bell.png'
import user from '../assets/images/fi_user.png'
import menu from '../assets/images/fi_menu.png'
import Notif from './Notif'
import { logout } from '../redux/action/loginAction';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userState = useSelector(state => state.login)
    const userInfo = userState.user.data.Profile.name

    const handleSignOut = () => {
        dispatch(logout())
        navigate('/login', { replace: true })
    }

    const handleProfile = () => {
        navigate('/info-profile', {replace:true})
    }

    return (
        <>
      <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-body rounded">
                <div className="container-fluid">
                    <a
                        className="navbar-brand col-4"
                        id="logo"
                        style={{ paddingLeft: "100px" }}
                    >
                        <img src={Logo} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="input-group md-form form-sm form-1 pl-0">
                        <input
                            className="form-control my-0 py-1 pencarian"
                            type="text"
                            placeholder="Cari di sini ..."
                            aria-label="Search"
                        />
                        <span className="input-group-text purple lighten-3 px-4">
                            <Image className='input-search' src={search} />
                        </span>
                    </div>
                    <div className="frame-158">
                        <img src={list} />
                        {/* <a href="/notifikasi">    */}
                        <img src={bell} />
                        {/* </a>  */}
                        <div class="dropdown">
                            <button class="btn btn-secondary" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={user} />
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><h5 class="dropdown-header">Hi, {userInfo} </h5></li>
                                <li><button class="dropdown-item" type="button" onClick={() => handleProfile()}>Profile</button></li>
                                <li><button class="dropdown-item" type="button">Another action</button></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><button class="dropdown-item" onClick={() => handleSignOut()}>
                                    Sign Out
                                </button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

      <div className="frame-menu-nav">
        <img src={menu} className="menu-nav" />
      </div>
    </>
    );

};

export default Navbar;