import React from "react";
import classNames from "classnames/bind";
import styles from "~/assets/css/componentStyles/frontend/Hotel.module.scss"

const cx = classNames.bind(styles)
const Hotel = () => {
    return(
        <div className={cx('hotel')}>
            <section className={cx('overlay','d-flex justify-content-center', 'align-items-center')}>
                <h2>Hotels</h2>
            </section>
            <section className="container">
                <div className={cx('hotel-list')}>
                    <div className={cx('row')}>
                        <div className="col-md-3">
                            <div className={cx('hotel-filter')}>
                                <h5>FIND CITY</h5>
                                <div className={cx('form-group')}>
                                    <input className={cx('desti','form-control')} name="desti" type="text" placeholder="Destination, City" />
                                </div>
                                <div className={cx('form-group')}>
                                    <select className={cx('local','form-control')} name="local">
                                        <option value="0">Select Localtion</option>
                                        <option value="1">Ha Noi</option>
                                        <option value="2">Da Lat</option>
                                        <option value="3">Quang Ninh</option>
                                    </select>
                                </div>
                                <div className={cx('form-group')}>
                                    <input className={cx('date-from','form-control')} name="desti" type="text" placeholder="Date from"
                                        onFocus= {(e)=>{e.target.type = 'date'}}
                                        onBlur={(e) =>{e.target.type = 'text'}}
                                    />
                                </div>
                                <div className={cx('form-group')}>
                                    <input className={cx('date-from','form-control')} name="desti" type="text" placeholder="Date to"
                                        onFocus= {(e)=>{e.target.type = 'date'}}
                                        onBlur={(e) =>{e.target.type = 'text'}}
                                    />
                                </div>
                                <div className={cx('form-group')}>
                                    <div className="d-flex justify-content-evenly">
                                        <span>50$</span>
                                        <span>-</span>
                                        <span>2500$</span>
                                    </div>
                                    <input className={cx('form-range')} type="range" min="50" max="2500" step="50"></input>
                                </div>
                                <button className={cx('search-btn')}>Search</button>
                            </div>

                            <div className={cx('hotel-rate')}>
                                <h5>STAR RATING</h5>
                                <ul className={cx('rate-list')}>
                                    <li className={cx('rate-item')}>
                                        <input type="checkbox" name="rate-5"></input>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        
                                    </li>
                                    <li className={cx('rate-item')}>
                                        <input type="checkbox" name="rate-4"></input>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')}></i>
                                        
                                    </li>
                                    <li className={cx('rate-item')}>
                                        <input type="checkbox"  name="rate-3"></input>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')}></i>
                                        <i className={cx('fa-solid fa-star')}></i>
                                        
                                    </li>
                                    <li className={cx('rate-item')}>
                                        <input type="checkbox"  name="rate-2"></input>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')}></i>
                                        <i className={cx('fa-solid fa-star')}></i>
                                        <i className={cx('fa-solid fa-star')}></i>
                                        
                                    </li>
                                    <li className={cx('rate-item')}>
                                        <input type="checkbox"  name="rate-1"></input>
                                        <i className={cx('fa-solid fa-star')} style={{'color': '#f85959'}}></i>
                                        <i className={cx('fa-solid fa-star')}></i>
                                        <i className={cx('fa-solid fa-star')}></i>
                                        <i className={cx('fa-solid fa-star')}></i>
                                        <i className={cx('fa-solid fa-star')}></i>
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">A</div>
                        <div className="col-md-3">B</div>
                        <div className="col-md-3">C</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Hotel