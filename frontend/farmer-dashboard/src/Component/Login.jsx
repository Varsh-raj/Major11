import React, { useState } from "react";
import Header from "./Header";
import "./Login.css"; // CSS file for styling

const Login = () => {
  const [isOtpLogin, setIsOtpLogin] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [passwordOrOtp, setPasswordOrOtp] = useState("");

  const toggleLoginMethod = () => {
    setIsOtpLogin(!isOtpLogin);
    setEmailOrPhone("");
    setPasswordOrOtp("");
  };

  const handleLogin = () => {
    if (isOtpLogin) {
      alert(`Logging in with OTP: ${passwordOrOtp}`);
      // Handle phone/OTP login logic here
    } else {
      alert(`Logging in with Email: ${emailOrPhone} and Password: ${passwordOrOtp}`);
      // Handle email/password login logic here
    }
  };

  return (
    <>
      <Header />
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>{isOtpLogin ? "Phone Number" : "Email"}</label>
        <input
          type={isOtpLogin ? "tel" : "email"}
          placeholder={isOtpLogin ? "Enter phone number" : "Enter email"}
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>{isOtpLogin ? "OTP" : "Password"}</label>
        <input
          type={isOtpLogin ? "text" : "password"}
          placeholder={isOtpLogin ? "Enter OTP" : "Enter password"}
          value={passwordOrOtp}
          onChange={(e) => setPasswordOrOtp(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <button className="toggle-button" onClick={toggleLoginMethod}>
        {isOtpLogin ? "Use Email/Password" : "Use Phone/OTP"}
      </button>
      <p className="register-message">
        Don’t have an account?{" "}
        <a href="/register" className="register-link">Register here</a>
      </p>
    </div>
    </>
  );
};

export default Login;
