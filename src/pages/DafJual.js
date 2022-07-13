import React from 'react';
import "../assets/style.css"
import Navbar from '../component/Navbar';
import Notif from '../component/Notif';
import Alert from '../component/Alert';
import Penjual from '../component/Penjual';
import Jual from '../component/Daftar-jual';

export const DafJual = () => {
    return (
        <div>
            <Navbar />
            <Notif />
            <Alert />
            <Penjual />
            <Jual />
        </div>
    )
}
