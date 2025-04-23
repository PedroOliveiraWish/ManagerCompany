import React from "react";
import { Card } from "react-bootstrap";
import { Employee_Specification } from "../../../types/employee.type";

function EmployeeCard(employee: Employee_Specification) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{employee.funcionario_nome}</Card.Title>
        <Card.Text>
          <div className="employee-item">{employee.cargo}</div>
          <div className="employee-item">{employee.setor}</div>
          <div className="employee-item">{employee.salario}</div>
        </Card.Text>
        <Card.Footer>
          <div className="employee-item">{employee.data_admissao}</div>
          <div className="employee-item">{employee.tempo_empresa}</div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default EmployeeCard;