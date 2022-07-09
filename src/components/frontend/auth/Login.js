import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from '~/assets/css/auth/Login.module.scss'
import axios from "axios";
import Swal from "sweetalert2";

const cx = classNames.bind(styles)
const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [errorList, setErrorList] = useState({})
    const handleUserInput = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/login',user).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.auth_token)
                    localStorage.setItem('auth_name', res.data.auth_name)
                    Swal.fire({
                        title: 'Good job!',
                        text: res.data.message,
                        icon: "success"
                    })
                    navigate('/')
                } else if(res.data.status === 401){
                    Swal.fire({
                        title: 'Error!',
                        text: res.data.message,
                        icon: "error"
                    })
                } else {
                    setErrorList({...res.data.validation_errors})
                }
            })
        })
    }
    return (
        <div className={cx('wrapper','d-flex', 'justify-content-center')}>
            <div className={cx('register','row')}>
                    <div className={cx('images', 'col-md-3')}>
                        <img src="https://static.saltinourhair.com/wp-content/uploads/2020/07/23113310/vietnam-travel-guide-map.png" alt=""></img>
                    </div>
                    <div className={cx('form', 'col-md-9')}>
                        <h3>Login</h3>
                        <div className={cx("input-box")}>
                            <label htmlFor="mail">Email</label>
                            <input type="text" name="email" placeholder="Enter Email" id="mail"
                                value={user.email} onChange={(e) => handleUserInput(e)}>                        
                            </input>
                            {errorList.email? <span>* {errorList.email}</span> : ''} 
                        </div>
                        <div className={cx("input-box")}>
                            <label htmlFor="pass">Password</label>
                            <input type="password" name="password" placeholder="Enter Password" id="pass"
                                value={user.password} onChange={(e) => handleUserInput(e)}>
                            </input>
                            {errorList.password? <span>* {errorList.password}</span> : ''} 
                        </div>
                        <button type="" onClick={(e) => handleSubmit(e)}>Login</button>
                    </div>
            </div>
        </div>
    )
}
export default Login