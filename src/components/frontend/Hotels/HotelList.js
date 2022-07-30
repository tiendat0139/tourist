import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
import styles from '~/assets/css/component/frontend/hotel/Hotellist.module.scss'
import Pagination from "~/components/global/Pagination";

const cx = classNames.bind(styles)
const HotelList = () => {
    const { cityId } = useParams();
    const [cityName, setCityName] = useState('');
    const [hotelList, setHotelList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get(`/api/get-hotellist/${cityId}?page=${currentPage}`).then(res => {
            if(res.data.status === 200){
                setCityName(res.data.cityName)
                setHotelList(res.data.hotellist.data)
            }
        })
    })
    return(
        <div className={cx('col-md-9', 'hotel-list')}>
            <h3 className="text-center mb-4 mt-4 fw-bold">Most popular hotels in {cityName}</h3>
            {
                hotelList.map((item, idx) => (
                    <div className={cx('hotel-item', 'mb-4')} key={idx}>
                        <div className="row">
                            <div className="col-md-2">
                                <img src={item.image} alt=""></img>
                            </div>
                            <div className="col-md-7">
                                <div className={cx('content')}>
                                    <h5>{item.name}</h5>
                                    <h6 className={cx('cpn')}>{item.company_name}</h6>
                                    <div className={cx('hotel-local','text-truncate')}>
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span className="mx-2">{item.local}</span>               
                                    </div>
                                    <div className={cx('vote')}>
                                        <div className={cx('vote-star')}><i className="fa-solid fa-star"></i></div>
                                        <div className={cx('vote-star')}><i className="fa-solid fa-star"></i></div>
                                        <div className={cx('vote-star')}><i className="fa-solid fa-star"></i></div>
                                        <div className={cx('vote-star')}><i className="fa-solid fa-star"></i></div>
                                        <div className={cx('vote-star')}><i className="fa-solid fa-star"></i></div>
                                    </div>
                                    <div className={cx('disc', 'd-inline')}>{item.sale}% off</div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={cx('price')}>
                                    <div className={cx('number')}>
                                        <div className={cx('price-text')}>Avg price per night</div>
                                        <div className={cx('old')}>
                                            {Intl.NumberFormat('vi',{style: 'currency', currency: 'VND'}).format(item.price * 24000)}
                                        </div>
                                        <div className={cx('new')}>
                                            {Intl.NumberFormat('vi',{style: 'currency', currency: 'VND'}).format(item.price * ( 1-item.sale/100) * 24000)}
                                        </div>
                                    </div>
                                    <Link to={`/hotels/detail/${item.id}`} className={cx('view-detail')}>View Detail</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <Pagination />
        </div>
    )
}

export default HotelList