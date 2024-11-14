import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    alert("Password reset email sent!");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    navigate("/");
  };

  return (
    <div>
      {forgotPassword ? (
        <div>
          <h2>Reset Password</h2>
          <form onSubmit={handleResetPassword}>
            <label>Email:</label>
            <input
              type="email"
              name="resetEmail"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />
            <button type="submit">Send</button>
          </form>
          <div className="reset-form">
            <p>To reset your password, an email is sent.</p>
          </div>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
          <p className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </p>
        </div>
      )}
    </div>
  );
};


export default Login;
