import React from "react";

const InputFields = ({ inputs, onchange }) => {
  return (
    <div className="inputParent">
      <label htmlFor={inputs.id}>{inputs.label}</label>
      <input
        type={inputs.type}
        placeholder={inputs.placeholder}
        id={inputs.id}
        required
        onChange={onchange}
      />
    </div>
  );
};

export default InputFields;
