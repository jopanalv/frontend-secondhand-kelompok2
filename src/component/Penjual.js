import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {IMG_URL} from "../redux/action/api";

const Jual = () => {

    const userState = useSelector(state => state.login)

    return (

        <div className='Container'>

            <span className='daftarjual-title'>Daftar Jual Saya</span>
            <div className='penjual'>
                <div className='frame-138'>
                    <img className='foto-penjual' src={`${IMG_URL}` + userState.user.data.Profile.image} />
                    <div className='frame-137'>
                        <span className='nama-penjual'>{userState.user.data.Profile.name}</span>
                        <span className='kota'>{userState.user.data.Profile.city}</span>
                    </div>
                    <div className='frame-141'>
                    <a href="/info-profile">
                        <span className='edit'>Edit</span>
                    </a>
                    </div>

                </div>
            </div> 
            
        </div>
        
    );
 
};

export default Jual;