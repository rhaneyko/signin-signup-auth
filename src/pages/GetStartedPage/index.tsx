import { Link } from "react-router-dom";
import { Container, GetStartedContainer, Buttons, Button } from "./styles";

const GetStartedPage = () => {
  return (
    <Container>
      <GetStartedContainer>
        <Buttons>
          <Button>
            <Link
              to={"/signin"}
              style={{ color: "#FFF", marginLeft: 5, textDecoration: "none" }}
            >
              Entrar
            </Link>
          </Button>
          <Button>
            <Link
              to={"/signup"}
              style={{ color: "#FFF", marginLeft: 5, textDecoration: "none" }}
            >
              Registrar-se
            </Link>
          </Button>
        </Buttons>
      </GetStartedContainer>
    </Container>
  );
};

export default GetStartedPage;
