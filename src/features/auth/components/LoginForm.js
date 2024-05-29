import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './LoginForm.css';
// Import your user icon image
import userIcon from '../../../assets/images/user-icon.png';

const LoginForm = ({ onLogin }) => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success,setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const validationErrors = {};
    if (!registrationNumber) {
      validationErrors.registrationNumber = 'The Registration Number field is mandatory.';
    }
    if (!password) {
      validationErrors.password = 'The Password field is mandatory.';
    }
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const payload = {
        registration_number: registrationNumber,
        password: password,
      };
      const response = await axios.post('http://localhost:5000/api/login', payload);
      if(response.status == 200){
        setSuccess(response.data.msg);
        onLogin(response.data);
        setTimeout(() => {
          navigate('/login-otp');
        }, 2000);
      }
    } catch (err) {
      if (err.response && err.response.data) {
        console.log(err.response.status);
        if(err.response.status == 400 ){
          setErrors({ global: 'Invalid Credentials' });
        }
        setErrors(err.response.data);
      } else {
        setErrors({ global: 'An unexpected error occurred. Please try again later.' });
      }
    }    
  };

  return (
    <div className="login-form-container">
      {/* Use the user icon image */}
      <img src={userIcon} alt="User Icon" className="user-icon" />
      {errors.global && <div className='alert alert-danger'>{errors.global}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="registrationNumber"
            className="form-control"
            placeholder="Registration No"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
          {errors.registrationNumber && <p className="error">{errors.registrationNumber}</p>}
        </div>
        <div className="form-group password-container">
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <FontAwesomeIcon 
              icon={showPassword ? faEyeSlash : faEye} 
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle-icon"
            />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
          {success && <p className="success">{success}</p>}
        </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
