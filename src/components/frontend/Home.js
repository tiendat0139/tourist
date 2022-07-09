import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CountUp from 'react-countup';

import "~/assets/css/componentStyles/frontend/home.css"
import { ReactComponent as GuaranteeIcon  } from "~/assets/img/guarantee.svg"
import { ReactComponent as Detective  } from "~/assets/img/detective.svg"
import { ReactComponent as Heart  } from "~/assets/img/heart.svg"
import { ReactComponent as Support  } from "~/assets/img/support.svg"
import {ReactComponent as Quote} from "~/assets/img/quote.svg"

import halongImg from "~/assets/img/halongslide.jpg"
import hoianImg from "~/assets/img/hoian.jpg"
import phuquocImg from "~/assets/img/phuquoc.jpg"
import sapaImg from "~/assets/img/sapa.jpg"
import tamdaoImg from "~/assets/img/tamdao.jpg"
import tranganImg from "~/assets/img/trangan.jpg"
import phongnhaImg from "~/assets/img/phongnha.jpg"

import dalatTop from "~/assets/img/dalattop.jpg"
import sapaTop from "~/assets/img/sapatop.jpg"
import haLongTop from "~/assets/img/halongtop.jpg"
import phuquocTop from "~/assets/img/phuquoctop.jpg"
import tamdaoTop from "~/assets/img/tamdaotop.jpg"
import background from "~/assets/img/background.jpg"


const Home = function(){

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        dotsClass: "button__bar"
    };
    const settingsTestimony = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dotsClass: "button__bar"
    }
    return(
        <div className="home">
            <div className="overlay">
                <div className="container fadeInUp">
                    <div className="overlay-header row align-items-center justify-content-start">
                        <div className="col-md-9">
                            <h1 className="mb-3" style={{opacity: `${ 1- offset / 200}`}}>
                                <strong>Explore</strong> <br/>
                                Wellcome to Vietnam
                            </h1>
                            <p style={{color: "#ffffffcc", opacity: `${ 1- offset / 200}`}} >Find great places to stay, eat, shop, or visit from local experts</p>
                            <div className="block-17 my-4">
                                <form >
                                    <div className="field d-flex">
                                        <div className="text-field one-third">
                                            <input type="text"  placeholder="Ex: Hotel, service,..."></input>
                                        </div>
                                        <div className="select-field one-third">
                                            <select type="text"  placeholder="Where" defaultValue={0}>
                                                <option value="0" > Where</option>
                                                <option value="1">Ha Noi</option>
                                                <option value="2">Da Nang</option>
                                                <option value="3">Ho Chi Minh City</option>
                                            </select>
                                        </div>
                                        <button type="button">Search</button>
                                    </div>
                                </form>                            
                            </div>
                            <p style={{fontSize:"20px", fontWeight:"200"}}>Or browse the highlights</p>
                            <p className="browse d-md-flex">
                                <span className="browse-item d-flex justify-content-md-center align-items-md-center">
                                    <Link to="#"><i className="fa-solid fa-utensils"></i> Restaurant </Link>
                                </span>
                                <span className="browse-item d-flex justify-content-md-center align-items-md-center">
                                    <Link to="#"><i className="fa-solid fa-hotel"></i> Hotel </Link>
                                </span>
                                <span className="browse-item d-flex justify-content-md-center align-items-md-center">
                                    <Link to="#"><i className="fa-solid fa-location-dot"></i> Place </Link>
                                </span>
                                <span className="browse-item d-flex justify-content-md-center align-items-md-center">
                                    <Link to="#"><i className="fa-solid fa-cart-shopping"></i> Shopping </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="service">
                <div className="container ">
                    <div className="row">
                        <div className="service-item col-md-3">
                            <div className="media text-center bg-light">
                                <div className="pt-4 d-flex justify-content-center">
                                    <GuaranteeIcon className="media-img" fill='red' stroke='red' strokeWidth="0.05" width="60"/>
                                </div>
                                <div className="media-body p-3">
                                    <h4>Best Price Guarantee</h4>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-item col-md-3">
                            <div className="media text-center bg-light">
                                <div className=" pt-4 d-flex justify-content-center">
                                    <Heart className="media-img" fill="red" stroke='red' strokeWidth="0.05" width="60" />
                                </div>
                                <div className="media-body p-3">
                                    <h4>Best Price Guarantee</h4>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-item col-md-3">
                            <div className="media text-center bg-light">
                                <div className=" pt-4 d-flex justify-content-center">
                                    <Detective className="media-img" fill="red" stroke='red' strokeWidth="0.05" width="60" />
                                </div>
                                <div className="media-body p-3">
                                    <h4>Best Price Guarantee</h4>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-item col-md-3">
                            <div className="media text-center bg-light">
                                <div className=" pt-4 d-flex justify-content-center">
                                    <Support className="media-img" fill="red" stroke='red' strokeWidth="0.05" width="60" />
                                </div>
                                <div className="media-body p-3">
                                    <h4>Best Price Guarantee</h4>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="destination mt-4">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className={`col-md-7 desti-heading ${window.scrollY > 400?'fadeInUp':''}`}>
                            <span className="desti-subheading d-block mb-2 px-3">Featured</span>
                            <h2 className="mb-4 px-3"><strong>Featured</strong> Destination</h2>
                        </div>
                    </div>
                    <div className={`desti-slider ${window.scrollY > 460?'fadeInUp':''}`}>
                        <Slider {...settings}>
                            <div className="px-3">
                                <div className="desti-slider_item">
                                    <div className="desti-slider_img" style={{backgroundImage:`url(${halongImg})`}}></div>
                                    <span className="d-block mt-4 px-3 fs-5">Ha Long, Quang Ninh</span>
                                    <span className="d-block mt-2 px-3 mb-4" style={{opacity:'0.5',fontSize: 14}}>5 Listing</span>
                                    <Link to="#" className="desti-slider_more"><i className="fa-solid fa-magnifying-glass"></i></Link>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="desti-slider_item">
                                    <div className="desti-slider_img" style={{backgroundImage:`url(${hoianImg})`}}></div>
                                    <span className="d-block mt-4 px-3 fs-5">Hoi An, Quang Nam</span>
                                    <span className="d-block mt-2 px-3 mb-4" style={{opacity:'0.5',fontSize: 14}}>5 Listing</span>
                                    <Link to="#" className="desti-slider_more"><i className="fa-solid fa-magnifying-glass"></i></Link>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="desti-slider_item">
                                    <div className="desti-slider_img" style={{backgroundImage:`url(${phuquocImg})`}}></div>
                                    <span className="d-block mt-4 px-3 fs-5">Phu Quoc, Kien Giang</span>
                                    <span className="d-block mt-2 px-3 mb-4" style={{opacity:'0.5',fontSize: 14}}>5 Listing</span>
                                    <Link to="#" className="desti-slider_more"><i className="fa-solid fa-magnifying-glass"></i></Link>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="desti-slider_item">
                                    <div className="desti-slider_img" style={{backgroundImage:`url(${sapaImg})`}}></div>
                                    <span className="d-block mt-4 px-3 fs-5">Sapa, Lao Cai</span>
                                    <Link to="#" className="desti-slider_more"><i className="fa-solid fa-magnifying-glass"></i></Link>
                                    <span className="d-block mt-2 px-3 mb-4" style={{opacity:'0.5',fontSize: 14}}>5 Listing</span>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="desti-slider_item">
                                    <div className="desti-slider_img" style={{backgroundImage:`url(${tamdaoImg})`}}></div>
                                    <span className="d-block mt-4 px-3 fs-5">Tam Dao, Vinh Phuc</span>
                                    <Link to="#" className="desti-slider_more"><i className="fa-solid fa-magnifying-glass"></i></Link>
                                    <span className="d-block mt-2 px-3 mb-4" style={{opacity:'0.5',fontSize: 14}}>5 Listing</span>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="desti-slider_item">
                                    <div className="desti-slider_img" style={{backgroundImage:`url(${tranganImg})`}}></div>
                                    <span className="d-block mt-4 px-3 fs-5">Trang An, Ninh Binh</span>
                                    <Link to="#" className="desti-slider_more"><i className="fa-solid fa-magnifying-glass"></i></Link>
                                    <span className="d-block mt-2 px-3 mb-4" style={{opacity:'0.5',fontSize: 14}}>5 Listing</span>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="desti-slider_item">
                                    <div className="desti-slider_img" style={{backgroundImage:`url(${phongnhaImg})`}}></div>
                                    <span className="d-block mt-4 px-3 fs-5" >Phong Nha, Ke Bang</span>
                                    <Link to="#" className="desti-slider_more"><i className="fa-solid fa-magnifying-glass"></i></Link>
                                    <span className="d-block mt-2 px-3 mb-4" style={{opacity:'0.5',fontSize: 14}}>5 Listing</span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>



            <section className="top-packet mt-4">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                            <div className={`col-md-7 desti-heading ${window.scrollY > 1300?'fadeInUp':''}`}>
                                <span className="desti-subheading d-block mb-2 px-3">Special Offers</span>
                                <h2 className="mb-4 px-3"><strong>Top</strong> Tour Packages</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid top-packet_list">
                        <div className={`row ${window.scrollY > 1360?'fadeInUp':''}`}>
                            <div className="col-sm col-md-6 col-lg">
                                <div className="desti-top_item">
                                    <Link to="#" className="d-block desti-top_img" style={{backgroundImage:`url(${dalatTop})`}}></Link>
                                    <div className="text p-2">
                                        <div className="d-flex">
                                            <div className="one col-8">
                                                <span className="desti-top_name">Da Lat</span>
                                                <p className="desti-top_rate pt-2">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </p>
                                            </div>
                                            <div className="two col-4 text-end">
                                                <span className="desti-top_price">$200</span>
                                            </div>
                                        </div>
                                        <p className="desti-top_desc">It is also known as the City of Flowers and honeymooners</p>
                                        <p className="desti-top_day">2 days 3 nights</p>
                                        <hr style={{height:"0.5px",color: "#333"}}/>
                                        <p className="desti-top_area">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <span>Lam Dong Province</span>
                                            <Link to="#" className="desti-top_view">Discover</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm col-md-6 col-lg">
                                <div className="desti-top_item">
                                    <Link to="#" className="d-block desti-top_img" style={{backgroundImage:`url(${sapaTop})`}}></Link>
                                    <div className="text p-2">
                                        <div className="d-flex">
                                            <div className="one col-8">
                                                <span className="desti-top_name">SaPa</span>
                                                <p className="desti-top_rate pt-2">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </p>
                                            </div>
                                            <div className="two col-4 text-end">
                                                <span className="desti-top_price">$200</span>
                                            </div>
                                        </div>
                                        <p className="desti-top_desc">The cold of Sapa makes tourists feel excited</p>
                                        <p className="desti-top_day">2 days 3 nights</p>
                                        <hr style={{height:"0.5px",color: "#333"}}/>
                                        <p className="desti-top_area">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <span>Lao Cai Province</span>
                                            <Link to="#" className="desti-top_view">Discover</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm col-md-6 col-lg">
                                <div className="desti-top_item">
                                    <Link to="#" className="d-block desti-top_img" style={{backgroundImage:`url(${haLongTop})`}}></Link>
                                    <div className="text p-2">
                                        <div className="d-flex">
                                            <div className="one col-8">
                                                <span className="desti-top_name">Ha Long</span>
                                                <p className="desti-top_rate pt-2">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </p>
                                            </div>
                                            <div className="two col-4 text-end">
                                                <span className="desti-top_price">$200</span>
                                            </div>
                                        </div>
                                        <p className="desti-top_desc">Ha Long Bay is one of the seven natural wonders in the world</p>
                                        <p className="desti-top_day">2 days 3 nights</p>
                                        <hr style={{height:"0.5px",color: "#333"}}/>
                                        <p className="desti-top_area">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <span>Ha Long City</span>
                                            <Link to="#" className="desti-top_view">Discover</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm col-md-6 col-lg">
                                <div className="desti-top_item">
                                    <Link to="#" className="d-block desti-top_img" style={{backgroundImage:`url(${tamdaoTop})`}}></Link>
                                    <div className="text p-2">
                                        <div className="d-flex">
                                            <div className="one col-8">
                                                <span className="desti-top_name">Tam Dao</span>
                                                <p className="desti-top_rate pt-2">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </p>
                                            </div>
                                            <div className="two col-4 text-end">
                                                <span className="desti-top_price">$200</span>
                                            </div>
                                        </div>
                                        <p className="desti-top_desc">Far far away, behind the word mountains, far from the countries</p>
                                        <p className="desti-top_day">2 days 3 nights</p>
                                        <hr style={{height:"0.5px",color: "#333"}}/>
                                        <p className="desti-top_area">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <span>Vinh Phuc Province</span>
                                            <Link to="#" className="desti-top_view">Discover</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm col-md-6 col-lg">
                                <div className="desti-top_item">
                                    <Link to="#" className="d-block desti-top_img" style={{backgroundImage:`url(${phuquocTop})`}}></Link>
                                    <div className="text p-2">
                                        <div className="d-flex">
                                            <div className="one col-8">
                                                <span className="desti-top_name">Phu Quoc</span>
                                                <p className="desti-top_rate pt-2">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </p>
                                            </div>
                                            <div className="two col-4 text-end">
                                                <span className="desti-top_price">$200</span>
                                            </div>
                                        </div>
                                        <p className="desti-top_desc">Phu Quoc Island boasts idyllic beaches, romantic sunsets</p>
                                        <p className="desti-top_day">2 days 3 nights</p>
                                        <hr style={{height:"0.5px",color: "#333"}}/>
                                        <p className="desti-top_area">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <span>Kien Giang Province</span>
                                            <Link to="#" className="desti-top_view">Discover</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section className="counter" style={{backgroundImage:`url(${background})`}}>
                <div className={`container ${window.scrollY > 1700?'fadeInUp':''}`}>
                    <div className="row justify-content-center mb-3">
                        <div className="col-md-12 counter-heading text-center">
                            <h2 className="mb-4">Some fun fact</h2>
                            <span className="counter-subheading" >More than 100,000 websites hosted</span>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center flex-column">
                            <strong className="number text-center" data-number="100000">
                                {window.scrollY > 1300? <CountUp start={0} end={100} duration={3} decimal="," decimals={3}/>:'0'}    
                            </strong> 
                            <span className="counter-desc text-center">Happy Customer</span>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center flex-column">
                            <strong className="number text-center" data-number="40000">
                                {window.scrollY > 1300? <CountUp start={0} end={40} duration={3} decimal="," decimals={3}/>:'0'}    
                            </strong> 
                            <span className="counter-desc text-center">Destination Places</span>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center flex-column">
                            <strong className="number text-center" data-number="87000">
                                {window.scrollY > 1300? <CountUp start={0} end={87} duration={3} decimal="," decimals={3}/>:'0'}    
                            </strong> 
                            <span className="counter-desc text-center">Hotels</span>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center flex-column">
                            <strong className="number text-center" data-number="56400">
                                {window.scrollY > 1300? <CountUp start={0} end={56.4} duration={3} decimal="," decimals={3}/>:'0'}    
                            </strong> 
                            <span className="counter-desc text-center">Hotels</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`testimony ${window.scrollY>2400?'fadeInUp':''}`}>
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col col-md-5 testimony-item">
                            <span className="testimony-item_heading">Best Directory Website</span>
                            <h2 className="mb-4 py-3 testimony-item_subheading"><strong>Why</strong>Choose Us?</h2>
                            <p>Full Service - Everything that a tourist may need when going abroad, in addition to the ticket. 
                                Quality Guarantee - We do not have to worry about paperwork necessary documents. Full support - contacting us, 
                                the tour and ending with advice on what to take with you on a trip.
                            </p>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                            <p className="py-4"><Link to="#" className="testimony-item_more">Read more</Link></p>
                        </div>
                        <div className="col col-md-1"></div>

                        <div className="col col-md-6 second-child">
                            <span className="testimony-item_heading">Testimony</span>
                            <h2 className="mb-4 py-3 testimony-item_subheading"><strong>Our</strong>Guests Says</h2>
                            <div className="testimony-slider">
                                <Slider {...settingsTestimony}>
                                    <div className="px-3">
                                        <div className="row testimony-slider-item">
                                            <div className="col col-md-3">
                                                <div className="testimony-slider_image" style={{backgroundImage: "url('https://kenh14cdn.com/2018/1/24/photo-1-1516800117120947485102.jpg')"}}>
                                                    <div className="testimony-slider_icon d-flex justify-content-center align-items-center">
                                                        <Quote className="testimony-quote" fill="white" stroke="white" width="16" height="20"></Quote>
                                                    </div>
                                                </div>
                                           </div>
                                            <div className="col col-md-9">
                                                <p>It's been three years, but looking at my photos, seeing the colors, the vibrant atmosphere, the smiles
                                                </p>
                                                <p className="name">Denis Green</p>
                                                <span className="position">Guest from London</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3">
                                        <div className="row testimony-slider-item">
                                            <div className="col col-md-3">
                                                <div className="testimony-slider_image" style={{backgroundImage: "url('https://i.pinimg.com/736x/61/53/89/61538985be2d99e196d2fdcaf114b195.jpg')"}}>
                                                    <div className="testimony-slider_icon d-flex justify-content-center align-items-center">
                                                        <Quote className="testimony-quote" fill="white" stroke="white" width="16" height="20"></Quote>
                                                    </div>
                                                </div>
                                           </div>
                                            <div className="col col-md-9">
                                                <p>It's been three years, but looking at my photos, seeing the colors, the vibrant atmosphere, the smiles
                                                </p>
                                                <p className="name">Denis Green</p>
                                                <span className="position">Guest from London</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3">
                                        <div className="row testimony-slider-item">
                                            <div className="col col-md-3">
                                                <div className="testimony-slider_image" style={{backgroundImage: "url('https://anh.24h.com.vn/upload/4-2014/images/2014-11-19/1416338420-sinh-vien-nuoc-ngoai-chup-anh-ki-yeu-01--10-.jpg')"}}>
                                                    <div className="testimony-slider_icon d-flex justify-content-center align-items-center">
                                                        <Quote className="testimony-quote" fill="white" stroke="white" width="16" height="20"></Quote>
                                                    </div>
                                                </div>
                                           </div>
                                            <div className="col col-md-9">
                                                <p>It's been three years, but looking at my photos, seeing the colors, the vibrant atmosphere, the smiles
                                                </p>
                                                <p className="name">Denis Green</p>
                                                <span className="position">Guest from Russia</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3">
                                        <div className="row testimony-slider-item">
                                            <div className="col col-md-3">
                                                <div className="testimony-slider_image" style={{backgroundImage: "url('https://xuatkhaulaodong.com.vn/images/2019/12/03/0-con-nguoi-nhat-ban2-min.jpg')"}}>
                                                    <div className="testimony-slider_icon d-flex justify-content-center align-items-center">
                                                        <Quote className="testimony-quote" fill="white" stroke="white" width="16" height="20"></Quote>
                                                    </div>
                                                </div>
                                           </div>
                                            <div className="col col-md-9">
                                                <p>It's been three years, but looking at my photos, seeing the colors, the vibrant atmosphere, the smiles
                                                </p>
                                                <p className="name">Denis Green</p>
                                                <span className="position">Guest from Japan</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="subcribe">  
                <div className={`container ${window.scrollY > 3000?'fadeInUp':''}`}>
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-md-7">
                            <h2 className="subcribe-header">Subcribe to our Newsletter</h2>
                            <p className="subcribe-subheader">Welcome to Viet Nam. Wish you have a fun trip</p>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-8">
                                    <form>
                                        <input type="text" className="subcribe-input" placeholder="Enter email address"></input>
                                        <button className="subcribe-btn" type="submit">Subcribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home