import React from "react";
import classNames from "classnames/bind";
import styles from '~/assets/css/component/global/Spinner.module.scss'

const cx = classNames.bind(styles)

const Spinner = () => {
    return(
        <div className="d-flex justify-content-center mt-4">
            <div className={cx('lds-roller')}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

        </div>
    )
}
export default Spinner