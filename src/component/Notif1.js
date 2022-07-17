import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifBuyer } from '../redux/action/notifAction';

const NotifBuyer = () => {
    const dispatch = useDispatch();

    const { getNotifBuyerResult, getNotifBuyerLoading, getNotifBuyerError } = useSelector(state => state.notif)

    useEffect(() => {
        dispatch(getNotifBuyer())
    }, [dispatch])

    return (
        <>
            {getNotifBuyerResult !== null ? (
                getNotifBuyerResult.map((notif) => (
                    <div className='container'>
                        <div className="list">
                            <div className="notif">
                                <img src={`http://localhost:5000/upload/images/${notif.Product.image}`} className='notif-img' />
                                <div className="notif-text">
                                    <div className="notif-ket">
                                        <span className='notif-ket-txt1'>Penawaran produk</span>
                                        <span className='notif-ket-txt2'>{notif.createdAt}</span>
                                    </div>
                                    <span className='notif-txt1'>{notif.Product.name}</span>
                                    <span className='notif-txt1'>Rp {notif.Product.price}</span>
                                    <span className='notif-txt1'>Ditawar Rp {notif.offer_price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : getNotifBuyerLoading ? (
                <p>Loading...</p>
            ) : getNotifBuyerError !== null ? (
                <div className='container'>{getNotifBuyerError}</div>
            ) : (
                <div className='container'>Notif tidak ada</div>
            )}
        </>
    );
};

export default NotifBuyer;