import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import db from "../../../api/db.json";
import { Usuario } from "../../../types/Usuario.type";

import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./login.component.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [perfil, setPerfil] = useState("");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    localStorage.clear();

    const fetchData = () => {
      try {
        const data = db.usuarios;
        setUsuarios(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: Usuario = {
      email: email,
      senha: password,
      perfil: perfil,
    };

    if (data.email === "" || data.senha === "" || data.perfil === "") {
      alert("Preencha todos os campos!");
      return;
    }

    const usuario = usuarios.find(
      (usuario) =>
        usuario.email === data.email &&
        usuario.senha === data.senha &&
        usuario.perfil === data.perfil
    );

    console.log(usuario);

    if (usuario) {
      if (usuario.perfil === "funcionario") {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        navigate("/funcionario");
      } else if (usuario.perfil === "gestor") {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        navigate("/gestor");
      } else if (usuario.perfil === "diretor") {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        navigate("/diretor");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <h1>Login</h1>
      <Form.Group controlId="formBasicEmail" className="controll">
        <Form.Label className="label">Email</Form.Label>
        <Form.Control
          className="input"
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword" className="controll">
        <Form.Label className="label">Senha</Form.Label>
        <Form.Control
          className="input"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPerfil" className="controll">
        <Form.Label className="label">Perfil</Form.Label>
        <Form.Control
          className="input"
          as="select"
          value={perfil}
          onChange={(e) => setPerfil(e.target.value)}
        >
          <option value="">Selecione um perfil</option>
          <option value="funcionario">Funcionário</option>
          <option value="gestor">Gestor</option>
          <option value="diretor">Diretor</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit" className="button">
        Entrar
      </Button>
    </Form>
  );
}

export default Login;
