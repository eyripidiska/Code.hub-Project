import React from "react";
import List from "./List";

const Employees = ({ employees, onSelectEmployee }) =>
    <div className="employees-list">
        <ul>
            {employees.length &&
                employees.map((employee) => (
                    <List key={employee.id} employee={employee} onSelectEmployee={onSelectEmployee} />
                ))}
        </ul>
    </div>


export default Employees;