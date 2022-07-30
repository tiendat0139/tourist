import "~/assets/css/layout/frontend/navbar.css"

import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Navbar = function(){
    const navigate = useNavigate();
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

    // Sign out
    const handleSignout = () => {
        axios.post('/api/logout').then(res => {
            if(res.data.status === 200){
                localStorage.removeItem('auth_token')
                localStorage.removeItem('auth_name')
                Swal.fire({
                    title: 'Good job!',
                    text: res.data.message,
                    icon: "success"
                })
                navigate('/')
            }
        })
    }
    var AuthButtons = ''
    if(!localStorage.getItem('auth_name')){
        AuthButtons = (
            <React.Fragment>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Sign in</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link nav-login" to="/register">
                        <span>Sign up</span>
                    </Link>
                </li>
            </React.Fragment>
        )
    } else {
        AuthButtons = (
            <li className="nav-item nav-user" style={{cursor: 'pointer'}}>
                <div className="user-icon"><i className="fa-solid fa-user"></i></div>
                <div className="down-icon"><i className="fa-solid fa-angle-down"></i></div>
                <div className="drop-down">
                    <ul className="drop-down_list">
                        <li className="drop-down_item"><Link to={'#'}>Profile</Link></li>
                        <li className="drop-down_item"><Link to={'#'} onClick={handleSignout}>Sign out</Link></li>
                        <li className="drop-down_item"><Link to={'/company'}>Company</Link></li>
                    </ul>
                </div>
            </li>
        )
    }
    
    return(
        <nav className ={`frontend-navbar navbar navbar-expand-lg ${show? 'navbar-light scrolled' : 'navbar-dark'}`}>
            <div className="container">
                <Link className="navbar-brand fw-bold" to="#">Viet Travel</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item" style={{cursor: 'pointer'}}>
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
                        {AuthButtons}
                    </ul>
                </div>
            </div>
    </nav>
    )
    
}

export default Navbar