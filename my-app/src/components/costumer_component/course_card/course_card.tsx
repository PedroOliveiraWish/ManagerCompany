import React from "react";
import { Card } from "react-bootstrap";

import { Course } from "../../../types/course.type";

function CourseCard(course: Course) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{course.titulo}</Card.Title>
        <Card.Text>{course.descricao}</Card.Text>

        <Card.Text>
          <span> | inicio: {course.data_inicio}</span>
          <span> | fim: {course.data_fim}</span>
          <span> | carga horaria: {course.carga_horaria}</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="topics">
          {course.topicos.map((topic, index) => (
            <span key={index} className="badge bg-secondary me-1">
              {topic}
            </span>
          ))}
        </div>
      </Card.Footer>
    </Card>
  );
}

export default CourseCard;
