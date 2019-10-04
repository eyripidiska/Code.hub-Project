import React, { useState, useEffect } from "react";
import axios from "axios";


const useUser = async () => {
    const [employees, setemployees] = useState(null);
    return await axios.get("http://localhost:3001/employees");
}

export {useUser};

