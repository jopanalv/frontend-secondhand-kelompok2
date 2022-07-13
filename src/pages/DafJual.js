import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../component/Navbar1';
import LogedNavbar from '../component/Navbar';
import Notif from '../component/Notif';
import Alert from '../component/Alert';
import Penjual from '../component/Penjual';
import Jual from '../component/Daftar-jual';

export const DafJual = () => {
    const auth = useSelector(state => state.login)

    return (
        <div>
            {
                auth.isAuthenticated ? <LogedNavbar /> : <Navbar />
            }
            <Notif />
            <Alert />
            <Penjual />
            <Jual />
        </div>
    )
}
