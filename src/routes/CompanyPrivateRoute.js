import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate, Navigate} from "react-router-dom";
import ReactLoading from 'react-loading'
import axios from "axios";
import Swal from "sweetalert2";

const CompanyPrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [logged, setLogged] = useState(false);

    //Tạo một request bất kì để nó đi qua middleware trên server
    useEffect(() => {
        axios.get('api/company/checkingAuthenticated').then(res => {
            if(res.data.status === 200){
                setLogged(true)
            }
            setLoading(false)
        });
        return () => {
            setLogged(false)
        }
    },[])

    
    axios.interceptors.response.use(function(response){
        return response
    }, function(error){
        if(error.response.status === 401){      // is not logged
            Swal.fire({
                'title' : 'UNAUTHORIZED',
                'text' : error.response.data.message,
                'icon' : 'warning'
            })  
            navigate('/login')
        } else if(error.response.status === 403){   //is not company
            Swal.fire({
                'title' : 'Forbidden',
                'text' : error.response.data.message,
                'icon' : 'error'
            })
            navigate('/')
        }
        return Promise.reject(error)
    })

    if(loading){
        return(
            <div className='d-flex justify-content-center align-items-center' style={{marginTop: '10vh'}}>
                <ReactLoading type="spokes" color="#736fec" height={60} width={60} />
            </div>
        )
    } else {
        return(
            logged? children : <Navigate to="/" />
        )
    }
}
export default CompanyPrivateRoute