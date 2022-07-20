import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNotifBuyer } from '../redux/action/notifAction';
import { IMG_URL } from '../redux/action/api';

const NotifBuyer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotifBuyer())
    }, [dispatch])

    const { getNotifBuyerResult, getNotifBuyerLoading, getNotifBuyerError } = useSelector(state => state.notif)

    console.log(getNotifBuyerResult)

    return (
        <>
            {getNotifBuyerResult !== null ? (
                getNotifBuyerResult && getNotifBuyerResult.map((notif) => (
                    <Link to={''}>
                    <div className='container'>
                        <div className="list">
                            <div className="notif">
                                <img src={`${IMG_URL}`+notif.Product.image} className='notif-img' />
                                <div className="notif-text">
                                    <div className="notif-ket">
                                        <span className='notif-ket-txt1'>Penawaran produk</span>
                                        <span className='notif-ket-txt2'>{notif.createdAt}</span>
                                    </div>
                                    <span className='notif-txt1'>{notif.Product.name}</span>
                                    <span className='notif-txt1 text-decoration-line-through'>Rp {notif.Product.price}</span>
                                    <span className='notif-txt1'>Berhasil Ditawar Rp {notif.offer_price}</span>
                                    <span className='notif-txt1 text-secondary'>Kamu akan segera dihubungi penjual via whatsapp</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
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