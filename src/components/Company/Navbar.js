import React from "react";
import classNames from "classnames/bind";
import styles from "~/assets/css/company/Navbar.module.scss"

const cx = classNames.bind(styles)

const Sidebar = () => {
    return(
        <div className={cx('navbar')}>
            <div className={cx('content')}>
                <img src="https://c8.alamy.com/comp/2AH6RFF/real-estate-company-logo-design-template-blue-house-and-building-concept-construction-architecture-element-apartment-condo-rouded-window-shape-2AH6RFF.jpg" alt=""></img>
                <span>Company Chanel</span>
            </div>
            <div className={cx('action')}>
                <i className="fa-solid fa-bell"></i>
                <div className={cx('user')}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1057/1057231.png?w=360" alt=""></img>
                    <span>Nguyen Tien Dat</span>
                </div>
            </div>
        </div>
    )
}
export default Sidebar