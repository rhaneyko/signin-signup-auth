import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  Container,
  Title,
  Button,
  } from "./styles";

const HomePage = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <Title>HOmePage</Title>
      <Button onClick={() => [signout(), navigate("/")]}>
        <p>Sair</p>
      </Button>
    </Container>
  );
};

export default HomePage;
