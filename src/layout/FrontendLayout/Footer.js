import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "~/assets/css/layout/frontend/footer.css"
const Footer = function(){
    const [offset, setOffset] = useState(0);
    const handleScroll = (e) => {
        setOffset(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);
    return(
        <div className="footer">
            <div className={`container ${offset>3450?'fadeInUp':''}`}>
                <div className="row mb-5">
                    <div className="col-md-3">
                        <h2 className="footer-heading">Viet Travel</h2>
                        <p className="footer-desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="footer-social">
                            <Link to="#"><ion-icon name="logo-facebook"></ion-icon></Link>
                            <Link to="#"><ion-icon name="logo-twitter"></ion-icon></Link>
                            <Link to="#"><ion-icon name="logo-instagram"></ion-icon></Link>  
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-item">
                            <h2 className="footer-heading">Information</h2>
                            <ul className="footer-desc_list">
                                <li className="footer-desc"><Link to="#">About</Link></li>
                                <li className="footer-desc"><Link to="#">Service</Link></li>
                                <li className="footer-desc"><Link to="#">Terms and Conditions</Link></li>
                                <li className="footer-desc"><Link to="#">Become a partner</Link></li>
                                <li className="footer-desc"><Link to="#">Best Price Guarantee</Link></li>
                                <li className="footer-desc"><Link to="#">Privacy and Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-item">
                            <h2 className="footer-heading">Customer Support</h2>
                            <ul className="footer-desc_list">
                                <li className="footer-desc"><Link to="#">FAQ</Link></li>
                                <li className="footer-desc"><Link to="#">Payment Option</Link></li>
                                <li className="footer-desc"><Link to="#">Booking Tips</Link></li>
                                <li className="footer-desc"><Link to="#">How it works</Link></li>
                                <li className="footer-desc"><Link to="#">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-item">
                            <h2 className="footer-heading">Have a Questions?</h2>
                            <ul className="footer-desc_list">
                                <li className="footer-desc footer-question">
                                    <ion-icon name="location"></ion-icon> 203 Fake St. Mountain View, San Francisco, California, USA
                                </li>
                                <li className="footer-desc footer-question">
                                    <ion-icon name="call"></ion-icon>+84 0332596597
                                </li>
                                <li className="footer-desc footer-question">
                                    <ion-icon name="mail-open"></ion-icon>info@gmail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="footer-desc">Copyright ©2022 All rights reserved | Made by Tien Dat</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer