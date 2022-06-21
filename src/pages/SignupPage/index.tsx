import React from 'react'

import {
    Container,
    SignupContainer,
    Title,
    SignupForm,
    SignupFormInput,
    Button,
    TextButton,
} from './styles'

const SignupPage = () => {
  return (
    <Container>
      <SignupContainer>
        <Title>Criar uma conta</Title>
        <SignupForm>
          <SignupFormInput placeholder="Nome de usuário" />
          <SignupFormInput placeholder="Email" />
          <SignupFormInput placeholder="Senha" />
          <SignupFormInput placeholder="Confirmar Senha" />

          <Button>
             <TextButton>Criar conta</TextButton>
          </Button>
        </SignupForm>
      </SignupContainer>  
    </Container>
  )
}

export default SignupPage;
