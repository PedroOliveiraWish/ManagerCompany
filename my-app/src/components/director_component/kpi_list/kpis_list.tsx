import React, { useState, useEffect } from "react";
import db from "../../../api/db.json";
import { KPI } from "../../../types/kpi.type";
import CardKPI from "../kpi_card/kpi_card";

import { Container } from "react-bootstrap";

import "./kpis_list.css";

function KpisList() {
  const [kpis, setKpis] = useState<KPI[]>([]);

  useEffect(() => {
    const fetchKpis = async () => {
      try {
        // Simulating an API call with a timeout
        const response = await new Promise<KPI[]>((resolve) => {
          setTimeout(() => {
            resolve(db.kpis);
          }, 100);
        });
        setKpis(response);
      } catch (error) {
        console.error("Error fetching KPIs:", error);
      }
    };

    fetchKpis();
  }, []);

  return (
    <Container className="mt-4">
      <div className="list-kpi">
        {kpis.map((kpi) => (
          <CardKPI key={kpi.id} {...kpi} />
        ))}
      </div>
    </Container>
  );
}

export default KpisList;
