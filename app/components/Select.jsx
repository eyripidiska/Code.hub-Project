import React from "react";

const Select = ({ Id, Name, value, onChange, displayName, options }) =>
    <div className="form-group">
        <label htmlFor={Name}>{displayName}</label>
        <select
            type="text"
            className="form-control"
            id={Id}
            name={Name}
            value={value}
            onChange={onChange}
        >
            {options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
    </div >


export default Select