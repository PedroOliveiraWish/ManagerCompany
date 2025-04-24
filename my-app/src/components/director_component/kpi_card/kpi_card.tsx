import React from "react";
import { Card } from "react-bootstrap";
import { KPI } from "../../../types/kpi.type";
import { ProgressBar } from "react-bootstrap";
import { Button } from "react-bootstrap";

function CardKPI(kpi: KPI) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title className="fw-semibold text-primary">{kpi.titulo}</Card.Title>
        <Card.Text className="text-muted">{kpi.descricao}</Card.Text>

        <div className="mb-3">
          <div className="info"><strong>Valor:</strong> {kpi.valor}</div>
          <div className="info"><strong>Unidade:</strong> {kpi.unidade}</div>
          <div className="info"><strong>Meta:</strong> {kpi.meta}</div>
          <div className="info"><strong>Data:</strong> {kpi.data_registro}</div>
        </div>

        <ProgressBar
          now={kpi.progresso}
          label={`${kpi.progresso}%`}
          variant={kpi.progresso >= 100 ? "success" : "info"}
        />
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
