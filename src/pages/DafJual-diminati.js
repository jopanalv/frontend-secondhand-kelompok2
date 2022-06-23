import React from 'react';

import Diminati from '../component/Diminati';
import Notif from '../component/Notif';
import Navbar from '../component/Navbar';
import Alert from '../component/Alert';
import Penjual from '../component/Penjual';

export const DafJualDiminati = () => {
    return (
        <div>
            <Navbar />
            {/* <Notif /> */}
            <Alert />
            <Penjual />
            <Diminati />
        </div>
    )
}
