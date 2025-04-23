import React from "react";
import CourseList from "../../components/costumer_component/courses_list/courses_list";

import { Container } from "react-bootstrap";

function CostumerPage() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center mt-4">
      <h1>Meus Cursos</h1>
      <CourseList />
    </Container>
  );
}

export default CostumerPage;