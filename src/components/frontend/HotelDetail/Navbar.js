import React from "react";
import Calendar from "react-calendar";
import classNames from "classnames/bind";
import styles from '~/assets/css/component/frontend/hoteldetail/Navbar.module.scss'
import 'react-calendar/dist/Calendar.css';
const cx = classNames.bind(styles)

const Navbar = (props) => {
    const { checkIn, setCheckIn, checkOut, setCheckOut, child, setChild, adult, setAdult, room ,setRoom  } = { ...props }
    return (
        <div className={cx('navbar')}>
            <div className={cx('container')}>
                <div className="row">
                    <div className="col-md-5">
                        <div className={cx('desti')} >Muong thanh hotel luxury</div>
                    </div>
                    <div className={cx('col-md-4', 'check-box')}>
                        <div className="row">
                            <div className="col-md-6" >
                                <div className={cx('check-in')}>
                                    <i className="fa-regular fa-calendar-check"></i>
                                    <span className="mx-3">{[checkIn.getDate(), checkIn.getMonth(), checkIn.getFullYear()].join('/')}</span>
                                    <div className={cx('drop-down')}>
                                        <Calendar onChange={setCheckIn} value={checkIn} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" style={{ borderLeft: '1px solid #ddd' }}>
                                <div className={cx('check-out')} >
                                    <i className="fa-regular fa-calendar-check"></i>
                                    <span className="mx-3">{[checkOut.getDate(), checkOut.getMonth(), checkOut.getFullYear()].join('/')}</span>
                                    <div className={cx('drop-down')}>
                                        <Calendar onChange={setCheckOut} value={checkOut} />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className={cx('room-opt')} >
                            <i className="fa-solid fa-user-group"></i>
                            <span className="px-3">{adult} adult, {child} child, {room} room</span>
                            <div className={cx('drop-down')}>
                                <ul>
                                    <li className="row">
                                        <div className="col-md-4 text-center"
                                            onClick={() => setRoom(prev => prev + 1)}
                                        > <i className="fa-solid fa-minus"></i> </div>
                                        <div className="col-md-4 text-center"> {room} <small>room</small> </div>
                                        <div className="col-md-4 text-center"
                                            onClick={() => setRoom(prev => prev + 1)}
                                        > <i className="fa-solid fa-plus"></i> </div>
                                    </li>
                                    <li className="row">
                                        <div className="col-md-4 text-center"
                                            onClick={() => setAdult(prev => prev === 0? 0 : prev -1)}
                                        > <i className="fa-solid fa-minus"></i> </div>
                                        <div className="col-md-4 text-center"> {adult} <small>Adult</small> </div>
                                        <div className="col-md-4 text-center"
                                            onClick={() => setAdult(prev => prev + 1)}
                                        > <i className="fa-solid fa-plus"></i> </div>
                                    </li>
                                    <li className="row">
                                        <div className="col-md-4 text-center"
                                            onClick={() => setChild(prev => prev === 0? 0 : prev -1)}
                                        > <i className="fa-solid fa-minus"></i> </div>
                                        <div className="col-md-4 text-center"> {child} <small>Children</small> </div>
                                        <div className="col-md-4 text-center"
                                            onClick={() => setChild(prev => prev + 1)}
                                        > <i className="fa-solid fa-plus"></i> </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar