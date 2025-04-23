import React from "react";
import { Card } from "react-bootstrap";
import { KPI } from "../../../types/kpi.type";
import { ProgressBar } from "react-bootstrap";
import { Button } from "react-bootstrap";

function CardKPI(kpi: KPI) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{kpi.titulo}</Card.Title>
        <Card.Text>{kpi.descricao}</Card.Text>
        <Card.Text>
          <span> | valor: {kpi.valor}</span>
          <span> | unidade: {kpi.unidade}</span>
          <span> | meta: {kpi.meta}</span>
          <span> | data: {kpi.data_registro}</span>
        </Card.Text>
        <ProgressBar now={kpi.progresso} label={`${kpi.progresso} %`} />
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-between align-items-center">
          <span>Status: {kpi.status}</span>
          <Button variant="primary">Ação</Button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default CardKPI;
