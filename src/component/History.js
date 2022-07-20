import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNotifSeller } from '../redux/action/notifAction';

const History = () => {
    const dispatch = useDispatch();

    const { getNotifSellerResult, getNotifSellerLoading, getNotifSellerError } = useSelector(state => state.notif)

    useEffect(() => {
        dispatch(getNotifSeller())
    }, [dispatch])

    console.log(getNotifSellerResult)

    return (
        <>
            {getNotifSellerResult !== null ? (
                getNotifSellerResult && getNotifSellerResult.map((notif) => (
                    <Link to={`/info-penawaran/${notif.id}`}>
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
                    </Link>
                ))
                ) : getNotifSellerLoading ? (
                    <p>Loading...</p>
                ) : getNotifSellerError !== null ? (
                    <div className='container'>{getNotifSellerError}</div>
                ) : (
                    <div className='container'>Notif tidak ada</div>
                )}
        </>
    );
};

export default History;