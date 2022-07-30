import React from "react";
import classNames from "classnames/bind";
import styles from '~/assets/css/component/global/Pagination.module.scss'
const cx = classNames.bind(styles)

const Pagination = (props) => {

    const link =  [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "http://localhost:8000/api/get-hotellist/5?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": "http://localhost:8000/api/get-hotellist/5?page=2",
            "label": "2",
            "active": false
        },
        {
            "url": "http://localhost:8000/api/get-hotellist/5?page=3",
            "label": "3",
            "active": false
        },
        {
            "url": "http://localhost:8000/api/get-hotellist/5?page=4",
            "label": "4",
            "active": false
        },
        {
            "url": "http://localhost:8000/api/get-hotellist/5?page=5",
            "label": "5",
            "active": false
        },
        {
            "url": "http://localhost:8000/api/get-hotellist/5?page=6",
            "label": "6",
            "active": false
        },
        {
            "url": "http://localhost:8000/api/get-hotellist/5?page=2",
            "label": "Next &raquo;",
            "active": false
        }
    ]
    const new_link = link.splice(1, link.length - 2);

    return(
        <div className={cx('pagination')} >
            <div className={cx('page-list')}>
                <div to={"#"} className={cx('page-item')}><i className="fa-solid fa-chevron-left"></i></div>
                {
                    new_link.map((item, idx) => (
                        <div to={item.url} className={cx('page-item', {'active': item.active})} key={idx}
                         url={item.url? item.url : ''}>{item.label}
                        </div>
                    ))
                }
                <div to={link[link.length-1].url} className={cx('page-item')}><i className="fa-solid fa-angle-right"></i></div>
            </div>
        </div>
    )
}
export default Pagination