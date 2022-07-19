import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import {
    Container,
    SignupContainer,
    Title,
    SignupInput,
    InputText,
    InputEmail,
    InputConfirmEmail,
    InputPassword,
    Button,
    TextButton,
} from './styles'


const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate()

  const [ email, setEmail ] = useState('')
  const [ emailConfirm, setEmailConfirm ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')
  

  

  const handleSignup = () => {
    if (email | !emailConfirm | !password) {
      setError('Preencha todos os campos')
      return;
    } else if (email !== emailConfirm) {
      setError('Os emails não conferem')
      return;
    }

    const res = signup(email, password)

    if (res) {
      setError(res)
      return;
    }
    alert('Usuário criado com sucesso')
    navigate('/')
  }

  return (
    <Container>
      <SignupContainer>
        <Title>Criar uma conta</Title>
          <InputEmail>
            <InputText>E-mail</InputText>
            <SignupInput 
             placeholder='Digite seu e-mail'
             type={'email'}
             value={email}
             onChange={(e) => [setEmail(e.target.value), setError('')]}
            />
          </InputEmail>
          <InputConfirmEmail>
            <InputText>Confirme seu E-mail</InputText>
            <SignupInput 
              placeholder='Digite seu e-mail novamente'  
              type={'email'}
              value={emailConfirm}
             onChange={(e) => [setEmailConfirm(e.target.value), setError('')]}
            />
          </InputConfirmEmail>
          <InputPassword>
            <InputText>Senha</InputText>
            <SignupInput 
              placeholder='Digite sua senha'
              type={'password'}
              secureTextEntry={true}
              value={password}
              onChange={(e) => [setPassword(e.target.value), setError('')]}
            />
          </InputPassword>
          <p style={{color: 'red', fontSize: 15}} >{error}</p>
          <Button onClick={handleSignup} >
             <TextButton>Criar conta</TextButton>
          </Button>
      </SignupContainer>  
    </Container>
  )
}

export default SignupPage;
