import React from 'react';
import "../assets/style.css"
import Diminati from '../component/Diminati';
import Navbar from '../component/Navbar1';
import Penjual from '../component/Penjual';

export const DafJualDiminati = () => {
    return (
        <div>
            <Navbar />
            <Penjual />
            <Diminati />
        </div>
    )
}
