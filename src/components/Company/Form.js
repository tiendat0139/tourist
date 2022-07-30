import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "~/assets/css/company/Form.module.scss"
import axios from "axios";
import Swal from "sweetalert2";
import { MultiSelect } from "react-multi-select-component";
const cx = classNames.bind(styles)

const Form = () => {
    const navigate = useNavigate();
    const [options, setOptions] = useState([]);
    const [errors, setErrors] = useState('')
    const [tour, setTour] = useState({
        name: '',
        local: '',
        time: '',
        types: [],
        price: '',
        desc: '',
        image: '',
        sale: ''
    })

    useEffect(() => {
        axios.get('/api/company/get-types').then(res => {
            const types = res.data.types;
            const option_arr = types.map((type) => {
                return {
                    label: type.name,
                    value: type.id
                }
            })
            setOptions(option_arr)
        })
    },[]);


    const handleInput = (e) => {
        setTour({...tour, [e.target.name] : e.target.value});
    }
    const handleTypes = (selected) => {
        setTour({...tour, types: selected})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {...tour, types: tour.types.map(type => type.value)}
        console.log(data)
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/company/add-tour', data).then(res => {
                if(res.data.status === 200){
                    Swal.fire({
                        title: 'Good job!',
                        text: res.data.message,
                        icon: 'success'
                    })
                    navigate('/company')
                } else {
                    setErrors({...res.data.validator_errors});
                    navigate('/');
                }
            })
        })
    }
    return(
        <div className={cx('form')}>
            <h2 className={cx('form-header')}>ADD A TOUR</h2>
            <div className={cx('form-content')}>
                <div className={cx('input-box', 'mb-3')}>
                    <label htmlFor="name" className="col-sm-2 col-form-label px-2">Name of Tour</label>
                    <input type="text" className="form-control shadow-none" name="name" id="name" placeholder="Ex: Ha Long Tour"
                        value = {tour.name} onChange={(e) => handleInput(e)}
                    />
                    <span className={cx('err-mess')}>{errors.name}</span>
                </div>
                <div className="row">
                    <div className={cx('input-box', 'mb-3','col-md-6')}>
                        <label htmlFor="local" className="col-sm-2 col-form-label px-2">Location</label>
                        <input type="text" className="form-control shadow-none" name="local" id="local" placeholder="Ex: Ha Long"
                            value = {tour.local} onChange={(e) => handleInput(e)}
                        />
                        <span className={cx('err-mess')}>{errors.local}</span>
                    </div>
                    <div className={cx('input-box', 'mb-3','col-md-6')}>
                        <label htmlFor="time" className="col-sm-2 col-form-label px-2">Time</label>
                        <input type="text" className="form-control shadow-none" id="time" name="time" placeholder="Ex: 2 days 1 night"
                            value = {tour.time} onChange={(e) => handleInput(e)}
                        />
                        <span className={cx('err-mess')}>{errors.time}</span>
                    </div>
                </div>
                <div className="row">
                    <div className={cx('input-box', 'mb-3','col-md-6',)}>
                        <label htmlFor="price" className="col-sm-2 col-form-label px-2">Price</label>
                        <input type="text" className="form-control shadow-none" id="price" name="price" placeholder="Ex: 1500$"
                            value = {tour.price} onChange={(e) => handleInput(e)}
                        />
                        <span className={cx('err-mess')}>{errors.price}</span>
                    </div>
                    <div className={cx('input-box', 'mb-3','col-md-6')}>
                        <label htmlFor="types" className="col-sm-2 col-form-label px-2">Types</label>
                        <MultiSelect
                            options={options}
                            value={tour.types}
                            onChange={handleTypes}
                            labelledBy="Selected"
                        />
                    </div>
                </div>
                <div className={cx('input-box', 'mb-3')}>
                    <label htmlFor="desc" className="col-sm-2 col-form-label px-2">Description</label>
                    <input type="text" className="form-control shadow-none" id="desc"name="desc" placeholder="Ex: Description"
                        value = {tour.desc} onChange={(e) => handleInput(e)}
                    />
                    <span className={cx('err-mess')}>{errors.desc}</span>
                </div>
                <div className="row">
                    <div className={cx('input-box', 'mb-3','col-md-6')}>
                        <label htmlFor="formFile" className="form-label">Image</label>
                        <input className="form-control shadow-none" type="file" id="formFile" name="image"
                            value = {tour.image} onChange={(e) => handleInput(e)}
                        />
                        <span className={cx('err-mess')}>{errors.image}</span>
                    </div>
                    <div className={cx('input-box', 'mb-3','col-md-6')}>
                        <label htmlFor="disc" className="col-sm-2 col-form-label px-2">Discount</label>
                        <input type="number" className="form-control shadow-none" id="disc"name="sale" placeholder="Ex: 20"
                            value = {tour.sale} onChange={(e) => handleInput(e)}
                        />
                        <span className={cx('err-mess')}>{errors.sale}</span>
                    </div>
                </div>
            </div>
            <button type="submit" className={cx('submit-btn')} onClick={(e) => handleSubmit(e)}>ADD TOUR</button>
        </div>

    )
}
export default Form