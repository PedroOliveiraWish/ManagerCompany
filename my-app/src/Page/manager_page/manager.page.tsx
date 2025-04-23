import React from "react";
import EmployeeList from "../../components/manager_component/employee_list/employee_list";

function ManagerPage() {
  return (
    <div className="manager-page">
      <h1>Manager Page</h1>
      <EmployeeList />
    </div>
  );
}

export default ManagerPage;