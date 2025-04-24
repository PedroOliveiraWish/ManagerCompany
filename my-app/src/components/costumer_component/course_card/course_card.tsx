import React from "react";
import { useNavigate } from "react-router";
import { Card } from "react-bootstrap";
import { Badge } from "react-bootstrap";

import { Course } from "../../../types/course.type";

import './course.css';

function CourseCard(course: Course) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/curso/programacao`);
  };

  return (
    <Card className="mb-3 shadow-sm border-0" onClick={handleClick} style={{cursor: 'pointer'}}>
      <Card.Body>
        <Card.Title className="fw-bold fs-5 text-primary">
          {course.titulo}
        </Card.Title>
        <Card.Text className="text-muted">{course.descricao}</Card.Text>

        <div className="mb-2">
          <div className="info">
            <strong>Início:</strong> {course.data_inicio}
          </div>
          <div className="info">
            <strong>Fim:</strong> {course.data_fim}
          </div>
          <div className="info">
            <strong>Carga horária:</strong> {course.carga_horaria}
          </div>
        </div>
      </Card.Body>

      <Card.Footer className="bg-light">
        <div className="d-flex flex-wrap gap-2">
          {course.topicos.map((topic, index) => (
            <Badge key={index} bg="secondary" style={{padding: '0.5rem 1rem'}} className="text-truncate">
              {topic}
            </Badge>
          ))}
        </div>
      </Card.Footer>
    </Card>
  );
}

export default CourseCard;
