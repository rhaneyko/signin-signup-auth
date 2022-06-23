import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {
    Container,
    Title,
    SigninContainer,
    SigninForm,
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
        <SigninForm>
          <InputEmail>
            <InputText style={{ marginLeft: 15 }}>E-mail</InputText>
            <SigninInput 
              type='email'
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
          </InputEmail>
          <InputPassword>
            <InputText style={{ marginLeft: 15 }}>Senha</InputText>
            <SigninInput 
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
        </SigninForm>
      </SigninContainer>  
    </Container>
  )
}

export default SigninPage;
