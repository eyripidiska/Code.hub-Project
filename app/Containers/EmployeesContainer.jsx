import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";
import Employees from "../components/Employees";
import Employee from "../components/Employee";
import { useUser } from "../api"


const EmployeesContainer = () => {
   const [employees, setemployees] = useState([]);
   const [selectedEmployee, setselectedEmployee] = useState();

   useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3001/employees",
      );

      setemployees( response.data );
    };
    fetchData();
  }, []);  


  const onSelectEmployee = (e, emp) => {
    e.preventDefault();
    setselectedEmployee(emp); 
  };
  
  const onInputChange = (e) => {
    const { value, name } = e.target;
  
    setselectedEmployee({ ...selectedEmployee, [name]: value } );
  };
  
  const onSelectChange = (e) => {
    const { value } = e.target;
    setselectedEmployee({ ...selectedEmployee, gender: value });
  };
  
  const onFormSubmit = async (e) => {
    console.log(selectedEmployee);
    e.preventDefault();
    const { id, ...rest } = selectedEmployee;

    await axios.put(`http://localhost:3001/employees/${id}`, rest);
    const newemployees = [...employees];
    const index = newemployees.findIndex((emp) => emp.id === id);
    newemployees[index] = {...selectedEmployee};
    setemployees( [ ...newemployees] ); 
  };  

  return (
    <Row>
    <Col xs={12}>
        <div className="employees-container">
            <Employees
                employees={employees}
                onSelectEmployee={onSelectEmployee}
            />

            <Employee
                selectedEmployee={selectedEmployee}
                onInputChange={onInputChange}
                onSelectChange={onSelectChange}
                onFormSubmit={onFormSubmit} 
            /> 
        </div>
    </Col>
</Row>
  ); 

}

export default EmployeesContainer;
