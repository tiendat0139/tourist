import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import classNames from "classnames/bind";
import styles from "~/assets/css/component/frontend/hoteldetail/HotelDetail.module.scss";
import Navbar from "./Navbar";
import Map from "./Map";
import Spinner from "~/components/global/Spinner";


const cx = classNames.bind(styles);
const HotelDetail = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
  const [hotel, setHotel] = useState(0)
  const [room, setRoom] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('/api/get-hoteldetail/1').then(res => {
      if(res.data.status === 200){
        setHotel({...res.data.hotelData[0], thumbnail: JSON.parse( res.data.hotelData[0].thumbnail )})
      }
      setLoading(false) 
    })
  },[])

  if(loading) return <Spinner />
  
  return (
    <div className={cx("hotel-detail")}>
      <Navbar checkIn={checkIn} setCheckIn={setCheckIn} checkOut={checkOut} setCheckOut={setCheckOut} 
        child={child} setChild={setChild} adult={adult} setAdult={setAdult} room={room} setRoom={setRoom}
      />
      <div className="container" style={{ paddingTop: '100px' }}>
        <h4 className={cx('hotel-name')}>{hotel.name}</h4>
        <div className={cx('d-flex', 'justify-content-between')}>
          <div className={cx('h-local')}>
            <div className={cx('type')}>{hotel.type}</div>
            <div className={cx('rate')}>2.6 (126 rating)</div>
            <ion-icon name="location-outline" ></ion-icon>{hotel.local}
          </div>
          <div className={cx('order-opt')}>
            <div className={cx('order-btn')}>Book now <ion-icon name="chevron-forward-outline"></ion-icon></div>
            <div className={cx('contact-btn')}>Contact <ion-icon name="chatbubble-ellipses-outline"></ion-icon></div>
          </div>
        </div>
        <div className={cx("image")}>
          <div className="row">
            <div className="col-md-6">
              <ReactPlayer
                url="https://teaser.hn.ss.bfcplatform.vn/1091_MYTOUR.mp4"
                width="100%"
                height="100%"
                playing={true}
                loop={true}
                muted={true}
              />
            </div>
            <div className="col-md-6">
              <div className="row">
                {
                  hotel.thumbnail.map((item, idx) => (
                    <div className="col-md-6 mb-2" key={idx}>
                      <img src={item} alt=""></img>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
           <Map></Map>
          </div>
          <div className="col-md-4">
            <div className={cx('bill')}>
              <h3> Total price</h3>
              <div className={cx('old-price')}>
                {Intl.NumberFormat('vi',{ style: 'currency', currency: 'VND' }).format((adult + child*0.5)* hotel.price * room * 24000)} 
              </div>
              <div className={cx('new-price')}>
                {Intl.NumberFormat('vi',{ style: 'currency', currency: 'VND' }).format((adult + child*0.5)* hotel.price * room * 24000 * (100 - hotel.sale) / 100)}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
        <div className="col-md-8">Desciption</div>
          <div className="col-md-4">
            <div className={cx('facility')}>
              <h5>Facilities  </h5>
              <div className={cx('row')}>
                <div className={cx('col-md-3', 'item', 'having')}>
                  <ion-icon name="checkmark-done-outline"></ion-icon> Park
                </div>
                <div className={cx('col-md-3', 'item', 'having')}>
                  <ion-icon name="checkmark-done-outline"></ion-icon> Exercise area
                </div>
                <div className={cx('col-md-3', 'item')}>
                  <ion-icon name="checkmark-done-outline"></ion-icon> Shuttle service
                </div>
                <div className={cx('col-md-3', 'item')}>
                  <ion-icon name="checkmark-done-outline"></ion-icon> Bicycle rental
                </div>
                <div className={cx('col-md-3', 'item')}>
                  <ion-icon name="checkmark-done-outline"></ion-icon> Park Spa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
