import axios from 'axios';
import React from 'react'
import { BASE_URL } from './utils';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const App = () => {

return(
  <BrowserRouter>
  <Routes>
    <Route path={'/'} element={<Login />}  />
    <Route path={"/register"} element={<Register />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App