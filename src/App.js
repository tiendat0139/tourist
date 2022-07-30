import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import FrontendLayout from "~/layout/FrontendLayout"
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import Company from './components/Company'
import CompanyPrivateRoute from './routes/CompanyPrivateRoute';
import HotelDetail from './components/frontend/HotelDetail';

import axios from "axios"
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

//interceptors sẽ được thực hiện trước khi mỗi request được gửi đi
//Ở đây sẽ với mỗi request thì đều gửi token đi
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token')
  config.headers.Authorization = token? `Bearer ${token}` : ''
  return config
});

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/*' element={<FrontendLayout />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          {/* <Route path='/company/*'  element={<CompanyPrivateRoute > <Company/> </CompanyPrivateRoute>}/> */}
          <Route path='/company/*' element={<Company />} />
          <Route path='/hotels/detail/:hotelId' element={<HotelDetail />} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
