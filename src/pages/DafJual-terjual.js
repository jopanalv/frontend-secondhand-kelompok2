import React from 'react';
import "../assets/style.css"
import Terjual from '../component/Terjual';
import Navbar from '../component/Navbar1';
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
