import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import FrontendLayout from "~/layout/frontend/FrontendLayout.js"

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/*' element={<FrontendLayout />}></Route>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
