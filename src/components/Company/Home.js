import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from '~/assets/css/company/Home.module.scss'
import Chart from "./Chart";
import axios from "axios";

const cx = classNames.bind(styles)
const Home = () => {
    const data = [
       {name: "Jan", month : 10},
       {name: "Feb", month : 6},
       {name: "Mar", month : 6},
       {name: "Apr", month : 8},
       {name: "May", month : 9},
       {name: "Jun", month : 12},
       {name: "Jul", month : 7},
       {name: "Sep", month : 3},
       {name: "Oct", month : 6},
       {name: "Nov", month : 9},
       {name: "Dec", month : 11},
    ]
    const [totalProduct, setTotalProduct] = useState('');
    
    useEffect(() => {
        axios.get('api/company/total-product').then(res => {
            if(res.data.status === 200){
                setTotalProduct(res.data.total)
            }
        })
    },[])
    return(
        <div className={cx('home')}>
            <div className={cx('total', 'row')}>
                <div className="col-md-3">
                    <div className={cx('item')}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className={cx('item-header')}>Total Order</div>
                                <div className={cx('item-data')}>0</div>
                            </div>
                            <div className="col-md-4">
                                <div className={cx('item-icon')}>
                                    <ion-icon name="bag-handle-outline"></ion-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={cx('item')}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className={cx('item-header')}>Total Product</div>
                                <div className={cx('item-data')}>{totalProduct}</div>
                            </div>
                            <div className="col-md-4">
                            <div className={cx('item-icon')}>
                                <ion-icon name="airplane-outline"></ion-icon>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={cx('item')}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className={cx('item-header')}>Profit Report</div>
                                <div className={cx('item-data')}>0</div>
                            </div>
                            <div className="col-md-4">
                                <div className={cx('item-icon')}>
                                    <ion-icon name="cash-outline"></ion-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={cx('item')}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className={cx('item-header')}>Total Customer</div>
                                <div className={cx('item-data')}>104</div>
                            </div>
                            <div className="col-md-4">
                                <div className={cx('item-icon')}>
                                    <ion-icon name="people-outline"></ion-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('statis')}>
                <Chart data={data} width={1100} height={300} stroke="#38b5e7" fill="#edf4f7"  />
            </div>
        </div>
    )
}
export default Home