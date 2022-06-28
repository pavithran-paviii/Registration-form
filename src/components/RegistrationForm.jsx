import React, { useState } from "react";
import CountryInput from "./CountryInput";
import { inputFieldData } from "../data/inputFieldsData";
import InputFields from "./InputFields";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "India",
    city: "",
    state: "",
    message: "",
  });

  const setData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("working");
    console.log(formData);
  };

  return (
    <div id="rightContainer">
      <div className="registrationForm">
        <h2 style={{ marginBottom: "10px" }}>Registration Form</h2>
        <div></div>
        <form onSubmit={handleSubmit}>
          {inputFieldData.map((inputs) => {
            if (inputs.label === "Country") {
              return (
                <div className="inputParent" key="country">
                  <label htmlFor="country">Country</label>
                  <CountryInput
                    id="country"
                    onchange={setData}
                    value={formData[inputs.id]}
                  />
                </div>
              );
            }

            return (
              <InputFields
                inputs={inputs}
                key={inputs.id}
                onchange={setData}
                value={formData[inputs.id]}
              />
            );
          })}

          <div className="inputParent">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Enter your message"
              id="message"
              onChange={setData}
            ></textarea>
          </div>
          <button id="submitButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
