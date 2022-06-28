import React from "react";
import CountryInput from "./CountryInput";

const RegistrationForm = () => {
  return (
    <div id="rightContainer">
      <div className="registrationForm">
        <h2 style={{ marginBottom: "10px" }}>Registration Form</h2>
        <div
          style={{
            width: "60px",
            height: "2px",
            backgroundColor: "#7dd4e7",
            marginBottom: "10px",
          }}
        ></div>
        <form>
          <div className="inputParent">
            <label for="username">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="username"
              required
            />
          </div>
          <div className="inputParent">
            <label for="email">Email</label>
            <input type="email" placeholder="Enter your email" id="email" />
          </div>
          <div className="inputParent">
            <label for="mobile">Mobile</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              id="mobile"
            />
          </div>
          <div className="inputParent">
            <label for="country">Country</label>
            <CountryInput id="country" />
          </div>
          <div className="inputParent">
            <label for="city">City</label>
            <input type="text" placeholder="Enter your City" id="city" />
          </div>
          <div className="inputParent">
            <label for="state">State</label>
            <input type="text" placeholder="Enter your State" id="state" />
          </div>
          <div className="inputParent">
            <label for="message">Message</label>
            <textarea placeholder="Enter your message" id="message"></textarea>
          </div>
          <button id="submitButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
