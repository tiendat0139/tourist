import React,{ useEffect, useState}from "react";
import axios from "axios";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from '~/assets/css/component/frontend/hotel/Citylist.module.scss'

const cx = classNames.bind(styles)
const CityList = () => {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('/api/all-city').then(res => {
            if(res.data.status === 200){
                setCities(res.data.cities)
                setLoading(false)
            }
        })
    },[])
    if(loading) return <div>Loading....</div>
    return(
            <div className={cx('col-md-9', 'city-list')}>
                <div className="row">
                    {cities.map((item, idx) => (
                        <div className="col-md-4 mb-4">
                            <div className={cx('des-item')} key={idx} city_id = {item.id} style={{backgroundImage: `url(${item.image})`}}>
                                <div className={cx('item-name')}>{item.name}</div>
                                <div className={cx('item-count')}>{item.total_hotel} hotels</div>
                                <Link to={`/hotels/list/${item.id}`} className={cx('item-alert')}>See hotel availability</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}
export default CityList