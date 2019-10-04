import React from "react";

const Input = ({ Id, Name, value, onChange, displayName }) =>
    <div className="form-group">
        <label htmlFor={Name}>{displayName}</label>
        <input
            type="text"
            className="form-control"
            id={Id}
            name={Name}
            value={value}
            onChange={onChange}
        />
    </div>


export default Input


