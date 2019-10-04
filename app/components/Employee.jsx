import React from "react";
import Input from "./Input";
import Select from "./Select";

const Employee = ({ selectedEmployee, onInputChange, onSelectChange, onFormSubmit }) => 

        <div className="employee-details">
            {selectedEmployee ? (
                <>
                    <h3>
                        {selectedEmployee.id}:{" "}
                        {`${selectedEmployee.firstName} ${selectedEmployee.lastName}`} (
{selectedEmployee.department})
</h3>
                    <form onSubmit={onFormSubmit}>
                        <Input
                            displayName="First name:"
                            Id="firstName"
                            Name="firstName"
                            value={selectedEmployee.firstName}
                            onChange={onInputChange}
                        />

                        <Input
                            displayName="Last name:"
                            Id="lastName"
                            Name="lastName"
                            value={selectedEmployee.lastName}
                            onChange={onInputChange}
                        />

                        <Select
                            displayName="Gender:"
                            Id="gender"
                            Name="gender"
                            value={selectedEmployee.gender}
                            onChange={onSelectChange}
                            options={["male", "female"]}
                        />

                        <Input
                            displayName="Email:"
                            Id="email"
                            Name="email"
                            value={selectedEmployee.email}
                            onChange={onInputChange}
                        />

                        <Input
                            displayName="Phone:"
                            Id="phone"
                            Name="phone"
                            value={selectedEmployee.phone}
                            onChange={onInputChange}
                        />

                        <Input
                            displayName="Mobile:"
                            Id="mobile"
                            Name="mobile"
                            value={selectedEmployee.mobile}
                            onChange={onInputChange}
                        />

                        <Input
                            displayName="Age:"
                            Id="age"
                            Name="age"
                            value={selectedEmployee.age}
                            onChange={onInputChange}
                        />

                        <button type="submit" className="btn btn-primary float-sm-right">
                            Submit
            </button>
                    </form>
                </>
            ) : (
                    <h3>Please select a user to view edit his data...</h3>
                )}
        </div>


export default Employee;