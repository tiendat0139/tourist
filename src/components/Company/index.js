import React from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Form from "./Form";
import Home from "./Home"
import classNames from "classnames/bind";
import styles from "~/assets/css/company/Company.module.scss"
const cx = classNames.bind(styles)

const Company = () => {

    return(
        <div className={cx('company')}>
            <div className={cx('wrapper')}>
                <Navbar/>
                <div className={cx('main','row')}>
                    <Sidebar />
                    <div className={cx('content', 'col-md-10')}>
                        <Routes>
                            <Route path="/" element = {<Home />} />
                            <Route path="/add-tour" element={<Form/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Company