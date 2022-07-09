import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import classNames from "classnames/bind";
import styles from '~/assets/css/auth/Register.module.scss'

const cx = classNames.bind(styles)
const Register = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        cf_password: '',
    })
    const [company, setCompany] = useState({
        cpn_name: '',
        cpn_phone: '',
        cpn_addr: '',
    })
    const [isCompany, setIsCompany] = useState(false)
    const [errorList, setErrorList] = useState({})
    const handleUserInput = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
    }
    const handleCpnInput = (e) => {
        setCompany({...company, [e.target.name] : e.target.value});
    }
    const handleCheck = (e) => {
        setIsCompany(e.target.checked)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {...user, ...company, isCompany: isCompany}
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/register', data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    Swal.fire({
                        title: 'Good job!',
                        text: res.data.message,
                        icon: "success"
                    })
                    navigate('/')
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
                        <h3>Register</h3>
                        <div className={cx("row")}>
                            <div className={cx("input-box","col-md-6")}>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" placeholder="Enter Name" id="name"
                                    value={user.name} onChange = {(e) => handleUserInput(e)}>
                                </input>
                                {errorList.name? <span>* {errorList.name}</span> : ''} 
                            </div>
                            <div className={cx("input-box","col-md-6")}>
                                <label htmlFor="mail">Email</label>
                                <input type="text" name="email" placeholder="Enter Email" id="mail"
                                    value={user.email} onChange={(e) => handleUserInput(e)}>                        
                                </input>
                                {errorList.email? <span>* {errorList.email}</span> : ''} 
                            </div>
                        </div>
                        <div className={cx("row")}>
                            <div className={cx("input-box" ,"col-md-6")}>
                                <label htmlFor="pass">Password</label>
                                <input type="password" name="password" placeholder="Enter Password" id="pass"
                                    value={user.password} onChange={(e) => handleUserInput(e)}>
                                </input>
                                {errorList.password? <span>* {errorList.password}</span> : ''} 
                            </div>
                            <div className={cx("input-box" ,"col-md-6")}>
                                <label htmlFor="cf_pass">Confirm Password</label>
                                <input type="password" name="cf_password" placeholder="Confirm PassWord" id="cf_pass"
                                    value={user.cf_password} onChange={(e) => handleUserInput(e)}>
                                </input>
                                {errorList.cf_password? <span>* {errorList.cf_password}</span> : ''} 
                            </div>
                        </div>

                        <div className={cx("select-box")}>
                            <label htmlFor="role-company">Company</label>
                            <input type="checkbox" name="role_company" id="role-company"
                                onChange={(e) => handleCheck(e)} value={isCompany}>
                            </input>
                        </div>
                        <div className={cx('company-inf', {"hide" : !isCompany})} >
                            <div className="row">
                                <div className={cx("input-box","col-md-6")}>
                                    <label htmlFor="cpn-name">Company Name</label>
                                    <input type="text" name="cpn_name"placeholder="Enter Company Name" id="cpn-name"
                                        value={company.cpn_name} onChange={(e) => handleCpnInput(e)}>
                                    </input>
                                    {errorList.cpn_name? <span>* {errorList.cpn_name}</span> : ''} 
                                </div>
                                <div className={cx("input-box","col-md-6")}>
                                    <label htmlFor="cpn-phone">Company Phone</label>
                                    <input type="text" name="cpn_phone"placeholder="Enter Company Phone" id="cpn-phone"
                                        value={company.cpn_phone} onChange={(e) => handleCpnInput(e)}>
                                    </input>
                                    {errorList.cpn_phone? <span>* {errorList.cpn_phone}</span> : ''} 
                                </div>
                            </div>
                            <div className={cx("input-box")}>
                                <label htmlFor="cpn-addr">Company Address</label>
                                <input type="text" name="cpn_addr"placeholder="Enter Company Address" id="cpn-addr"
                                    value={company.cpn_addr} onChange={(e) => handleCpnInput(e)}>
                                </input>
                                {errorList.cpn_addr? <span>* {errorList.cpn_addr}</span> : ''} 
                            </div>
                        </div>
                        <button type="" onClick={(e) => handleSubmit(e)}>Register</button>
                    </div>
            </div>
        </div>
    )
}
export default Register