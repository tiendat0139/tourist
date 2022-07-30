import React from "react";

import classNames from "classnames/bind";
import styles from "~/assets/css/component/frontend/hotel/Hotel.module.scss"
import Search from "../Search";
import { Route, Routes } from "react-router-dom";

import CityList from "./CityList";
import HotelList from "./HotelList";
const cx = classNames.bind(styles)
const Hotel = () => {
    return(
        <div className={cx('hotel','mb-5')}>
            <section className={cx('overlay','d-flex justify-content-center', 'align-items-center')}>
                <h2>Hotels</h2>
            </section>
            <section className="container">

                <div className={cx('banner')}>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Hotel partner</h3>
                            <h6>Domestic and international hotel partners</h6>
                            <p>We partner with hotel chains all over the world to ensure the best stay in every destination of your dreams!</p>
                        </div>
                        <div className="col-md-8 text-center">
                            <img className={cx('banner-img')} src="https://printgo.vn/uploads/media/774255/thiet-ke-logo-khach-san.._1586875996.png" alt=""></img>
                        </div>
                    </div>
                </div>
                
                <div className={cx('city-list')}>
                    <div className="row">
                        <Search />
                        <Routes>
                            <Route path="/" element={<CityList />} />
                            <Route path="/list/:cityId" element={<HotelList/>} />
                        </Routes>
                    </div>

                </div>

            </section>
        </div>
    )
}
export default Hotel