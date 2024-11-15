// UserInput.jsx
import React from "react";

const UserInput = ({ type, placeholder, value, onChange, required }) => {
  return (
    <div className="user-input-container">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="user-input"
      />
    </div>
  );
};

export default UserInput;
