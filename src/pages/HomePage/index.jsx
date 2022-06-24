import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  Container,
  HomeContainer,
  Title,
  Button,
  TextButton,
  } from "./styles";

const HomePage = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <HomeContainer>
        <Title>Home</Title>
        <Button onClick={() => [signout(), navigate("/")]}>
          <TextButton>Sair</TextButton>
        </Button>
      </HomeContainer>
    </Container>
  );
};

export default HomePage;
