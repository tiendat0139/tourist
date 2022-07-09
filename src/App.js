import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import FrontendLayout from "~/layout/frontend/FrontendLayout.js"
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
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
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
