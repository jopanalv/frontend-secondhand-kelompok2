import React from 'react';
import Logo from '../assets/images/Rectangle 127.png'
import search from '../assets/images/fi_search.png'
import list from '../assets/images/fi_list.png'
import bell from '../assets/images/fi_bell.png'
import user from '../assets/images/fi_user.png'
import menu from '../assets/images/fi_menu.png'
import Notif from './Notif'

const Navbar = () => {
    return (

    <div className='Container'>
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
                <div className="frame-search"> 
                    <span className='text-search'>Cari di sini ...</span>
                    <img src={search} /> 
                </div> 
                <div className="frame-158"> 
                    <img src={list} />
                    {/* <a href="/notifikasi">    */}
                        <img src={bell} />
                    {/* </a>  */}
                    <img src={user} /> 
                </div> 
            </div> 
            </nav>

            <div className="frame-menu">
                <img src={menu} className='menu' />
            </div> 
        </div>
        
    );
 
};

export default Navbar;