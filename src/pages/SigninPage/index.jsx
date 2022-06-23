import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {
    Container,
    Title,
    SigninContainer,
    SigninInput,
    InputText,
    InputEmail,
    InputPassword,
    Button,
    TextButton,

} from './styles'

const SigninPage = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if(!email || !password) {
      setError("Preencha todos os campos");
      return;
    }
    const res = signin(email, password);
    if(res){
      setError(res);
      return;
    }
    navigate('/home')
}
  return (
    <Container>
        <SigninContainer>
        <Title>Entre</Title>
          <InputEmail>
            <InputText>E-mail</InputText>
            <SigninInput 
              placeholder='Digite seu e-mail'
              type='email'
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
          </InputEmail>
          <InputPassword>
            <InputText>Senha</InputText>
            <SigninInput 
              placeholder='Digite sua senha'
              type={'password'}
              onChange={(e) => [setPassword(e.target.value), setError("")]}
            />
          </InputPassword>
          <p style={{color: 'red', fontSize: 15}} >{error}</p>

          <Button onClick={handleLogin} >
             <TextButton>Entrar</TextButton>
          </Button>
          <p style={{ marginTop: 15 }} >Não tem uma conta? 
           <strong>
             <Link to={'/signup'} style={{color: 'black', marginLeft: 5}}>Registre-se</Link>
           </strong>
          </p>
      </SigninContainer>  
    </Container>
  )
}

export default SigninPage;
