import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

import db from "../../../../api/db.json";

import { Module } from "../../../../types/modules.type";

function AccordionList() {
  const [modulos, setModules] = useState<Module[]>([]);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        // Simulating an API call with a timeout
        const response = await new Promise<Module[]>((resolve) => {
          setTimeout(() => {
            resolve(db.modulos_curso_programacao);
          }, 100);
        });
        setModules(response);
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };
    fetchModules();
  });

  const CardConteudo = (description: string) => {
    return (
      <Card className="card-conteudo">
        <Card.Body className="card-body-conteudo">
          <Card.Text className="card-text-conteudo">{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Accordion defaultActiveKey="0" className="accordion-modulos">
      {modulos.map((modulo) => (
        <Accordion.Item
          eventKey={modulo.id.toString()}
          key={modulo.id}
          className="accordion-item-modulos"
        >
          <Accordion.Header className="accordion-header-modulos">
            {modulo.titulo}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-modulos">
            {modulo.conteudos.map((descricao, index) => (
              <div key={index}>{CardConteudo(descricao)}</div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AccordionList;
