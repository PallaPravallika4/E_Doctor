import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" placeholder="Enter Username" onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter email" onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} required />
        <label>Confirm Password:</label>
        <input type="password" name="confirmpassword" placeholder="Confirm Password" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;