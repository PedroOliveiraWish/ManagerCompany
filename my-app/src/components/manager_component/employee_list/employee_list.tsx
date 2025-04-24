import React, { useState, useEffect } from "react";
import db from "../../../api/db.json";
import { Employee_Specification } from "../../../types/employee.type";
import EmployeeCard from "../employee_card/employee_card";
import { Container } from "react-bootstrap";

import "./employee_list.css";

function EmployeeList() {
  const [employees, setEmployees] = useState<Employee_Specification[]>([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const data = db.especificacoes_funcionarios;

        setEmployees(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div className="list_employee">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </div>
    </Container>
  );
}

export default EmployeeList;
