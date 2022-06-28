import React, { useState } from "react";

const InputFields = ({ inputs, onchange }) => {
  const [focus, setFocus] = useState(false);
  const { ...inputsSpread } = inputs;

  const handleFocus = () => {
    setFocus(true);
  };
  return (
    <div className="inputParent">
      <label htmlFor={inputs.id}>{inputs.label}</label>
      <input
        // type={inputs.type}
        // placeholder={inputs.placeholder}
        // id={inputs.id}
        onChange={onchange}
        {...inputsSpread}
        onBlur={handleFocus}
        focused={focus.toString()}
      />
      <span className="errorMessage">{inputs.error}</span>
    </div>
  );
};

export default InputFields;
