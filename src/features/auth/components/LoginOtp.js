// LoginOtp.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './LoginOtp.css';
// Import your user icon image
import userIcon from '../../../assets/images/user-icon.png';

const LoginOtp = ({ onSubmit}) => {
    const [otp, setOtp] = useState('');
    const [errors, setErrors] = useState({});
    const [success,setSuccess] = useState('');
    const navigate = useNavigate();

    const validate = () => {
      const validationErrors = {};
      if (!otp) {
        validationErrors.otp = 'The OTP field is mandatory.';
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
          otp: otp
        };
        const response = await axios.post('http://localhost:5000/api/otp-check', payload);
        if(response.status == 200){
          setSuccess(response.data.msg);
          onSubmit(response.data);
          navigate('/home');
        }
      } catch (err) {
        if (err.response && err.response.data) {
          console.log(err.response.status);
          if(err.response.status == 400 ){
            setErrors({ global: err.response.data.msg });
          }
        } else {
          setErrors({ global: 'An error occurred. Please try again later.' });
        }
      }
    };
    return (
      <div className="login-form-container">
        <img src={userIcon} alt="User Icon" className="user-icon" />
        {errors.global && <div className='alert alert-danger'>{errors.global}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="otp"
              name="otp"
              placeholder="Enter your OTP"
              className="form-control"
              value={otp}
              onChange={(e) => 
                setOtp(e.target.value)}
            />
            {errors.otp && <p className="error">{errors.otp}</p>}
          </div>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
        {success && <p className="success">{success}</p>}
      </div>
    );
};

export default LoginOtp;