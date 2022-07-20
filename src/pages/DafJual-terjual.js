import React from 'react';
import "../assets/style.css"
import Terjual from '../component/Terjual';
import Notif from '../component/Notif';
import Navbar from '../component/Navbar1';
import Alert from '../component/Alert';
import Penjual from '../component/Penjual';

export const DafJualTerjual = () => {
    return (
        <div>
            <Navbar />
            <Penjual />
            <Terjual />
        </div>
    )
}
