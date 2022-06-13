import "~/assets/css/layoutStyles/frontend/navbar.css"

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = function(){
    const [show, setShow] = useState(false)
    const handleScroll = (e) => {
        if(window.scrollY <= 200){
            setShow(false)
        } else {
            setShow(true)
        }
    }
    const hanleClick = (e) => {
        const ulElement = e.target.closest('ul').childNodes;
        //ulElement lap qua cac the li, element.childrent la the a
        ulElement.forEach(element => {
            element.childNodes[0].classList.remove('active')
        });
        e.target.classList.add('active');
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[])

    // 
    return(
        <nav className ={`frontend-navbar navbar navbar-expand-lg ${show? 'navbar-light scrolled' : 'navbar-dark'}`}>
            <div className="container">
                <Link className="navbar-brand fw-bold" to="#">Viet Travel</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/" onClick={hanleClick}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" onClick={hanleClick}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/hotels" onClick={hanleClick}>Hotels</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#" onClick={hanleClick}>Tour</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#" onClick={hanleClick}>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-addlist" to="#">
                            <span>Add Listing</span>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
    </nav>
    )
    
}

export default Navbar