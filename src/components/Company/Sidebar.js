import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "~/assets/css/company/Sidebar.module.scss"

const cx = classNames.bind(styles)

const Sidebar = () => {
    return(
        <div className={cx('sidebar', 'col-md-2')}>
            <Link to={''} className={cx('item')}><ion-icon name="home-outline" ></ion-icon>Home</Link>
            <Link to={'add-tour'} className={cx('item')}><ion-icon name="airplane-outline" ></ion-icon>Tour</Link>
            <Link to={'#'} className={cx('item')}><ion-icon name="bed-outline" ></ion-icon>Hotel</Link>
            <Link to={'#'} className={cx('item')}><ion-icon name="bar-chart-outline"></ion-icon>Report</Link>
        </div>
    )
}
export default Sidebar