import React from "react";
import KpisList from "../../components/director_component/kpi_list/kpis_list";
import { Container } from "react-bootstrap";

function DirectorPage() {
  return (
    <Container className="mt-4">
      <h1>Diretor Page</h1>
      <KpisList />
    </Container>
  );
}
export default DirectorPage;