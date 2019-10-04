/* import  { useState, useEffect } from "react";
import axios from "axios";


const useEmployees = () => {
    const [employees, setemployees] = useState(null);

    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "http://localhost:3001/employees",
            );

            setemployees(response.data);
        };
        fetchData();
    }, []);

    return employees;
    
}

export default useEmployees;  */

