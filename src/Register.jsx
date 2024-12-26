import axios from 'axios';
import React from 'react'
import { BASE_URL } from './utils';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const handleSign = () => {
    navigate("/register");
  }
  const handleForm = (e) => {
    const form = e.target;
    const payload = {
      email : form[1].value,
      password: form[2].value,
      username: form[0].value
    }
    axios.post(`${BASE_URL}/api/users/register`,payload);
    e.preventDefault()
  }
  return (
    <div className="container">
      <div className="wrapper">

        <div className="title">
          <span>Welcome back</span>
        </div>
        <p className='title_para'>Please enter your details to sign in.</p>

        <form onSubmit={handleForm}>
        <div className="row">
            {/* <i className="fas fa-user"></i> */}
            <input type="text" placeholder="Enter your userName..." required />
          </div>
          <div className="row">
            {/* <i className="fas fa-user"></i> */}
            <input type="text" placeholder="Enter your email..." required />
          </div>
          <div className="row">
            {/* <i className="fas fa-lock"></i> */}
            <input type="password" placeholder="Password" required />
          </div>
          <div className="row button">
            <input type="submit" value="Resgister" />
          </div>
          <div className="signup-link">Not a member? <a onClick={handleSign}>Signup now</a></div>
        </form>
      </div>
    </div>
  )
}

export default Register