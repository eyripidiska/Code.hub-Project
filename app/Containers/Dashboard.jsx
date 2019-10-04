import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import Header from "../components/Header";
import EmployeesContainer from "./EmployeesContainer";
import Footer from "../components/Footer";


const Dashboard = () => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3001/user",
      );
      setuser(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Header user={user}/>
      <EmployeesContainer />
      <Footer user={user}/>
    </Container>
  );
}

export default Dashboard;
