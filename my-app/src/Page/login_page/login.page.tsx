import React from "react";

import Login from "../../components/global_component/login_component/login.component";

import { Container } from "react-bootstrap";

function LoginPage() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Login />
    </Container>
  );
}

export default LoginPage;