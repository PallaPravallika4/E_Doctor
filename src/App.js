import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import "./index.css";

const App = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <img
          src="first.png" // Replace with your image path in the public folder
          alt="Doctor"
          className="left-image"
        />
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Top Section */}
        <div className="top-section">
          <h1>Welcome to Our Appointment System</h1>  
          <h2>
            <i>
            Find Your Right Doctor</i>
          </h2>
          <p>Any Time! Every Time!</p>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          {/* First Box */}
          <div className="option-box">
            <img src="doctor.png" alt="Doctor Icon" className="option-image" />
            <div className="option-text">
              <h3>Doctor</h3>
              <button onClick={() => openModal("login")}>Login</button>
              <button onClick={() => openModal("register")}>Register</button>
            </div>
          </div>

          {/* Second Box */}
          <div className="option-box">
            <img src="people.png" alt="Patient Icon" className="option-image" />
            <div className="option-text">
              <h3>Patient</h3>
              <button onClick={() => openModal("login")}>Login</button>
              <button onClick={() => openModal("register")}>Register</button>
            </div>
          </div>
          {/* third Box */}
          <div className="option-box">
            <img src="admin.png" alt="Admin Icon" className="option-image" />
            <div className="option-text">
              <h3>Admin</h3>
              <button onClick={() => openModal("login")}>Login</button>
              <button onClick={() => openModal("register")}>Register</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>Here, you can easily book your appointments with doctors or manage
            your patient records. Our platform is user-friendly and designed to
            save your time.</p>
          <div className="contact">
            <i className="phone-icon">📞</i>
            <span>Contact us: 2345678911</span>
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal === "register" && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <Register />
          </div>
        </div>
      )}
      {activeModal === "login" && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;