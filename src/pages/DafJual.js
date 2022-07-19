import React from 'react';
import "../assets/style.css";
import Navigasi from '../component/Navbar1';
import Penjual from '../component/Penjual';
import Jual from '../component/Daftar-jual';
import Notif from '../component/Notif';
import Alert from '../component/Alert';

export const DafJual = () => {

    return (
        <div>
            <Navigasi />
            {/* <Notif /> */}
            {/* <Notif /> */}
            <Alert />
            {/* <Penjual /> */}
            <Jual />
        </div>
    )
}
