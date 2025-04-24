import React from "react";
import AccordionList from "../../components/costumer_component/course_programacao/accordion_programacao/accordion_programacao";
import { Container } from "react-bootstrap";

function CoursePage() {
  return (
    <Container className="container-course-page">
      <h1 className="title-course-page">Curso de Programação</h1>
      <AccordionList />
    </Container>
  );
}

export default CoursePage;