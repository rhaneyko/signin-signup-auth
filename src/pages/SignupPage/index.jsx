import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import {
    Container,
    SignupContainer,
    Title,
    SignupForm,
    SignupFormInput,
    InputName,
    InputEmail,
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
        <SignupForm>
          <InputName>
            <p style={{ marginLeft: 15,
            
            }}>E-mail</p>
            <SignupFormInput 
             type={'email'}
             value={email}
             onChange={(e) => [setEmail(e.target.value), setError('')]}
            />
          </InputName>
          <InputEmail>
            <p style={{ marginLeft: 15 }}>Confirme seu E-mail</p>
            <SignupFormInput 
              type={'email'}
              value={emailConfirm}
             onChange={(e) => [setEmailConfirm(e.target.value), setError('')]}
            />
          </InputEmail>
          <InputPassword>
            <p style={{ marginLeft: 15 }}>Senha</p>
            <SignupFormInput 
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
          <p style={{ marginTop: 15 }} >Já tem uma conta? 
           <strong>
              <Link to={'/'} style={{color: 'black', marginLeft: 5}}>Entre</Link>
           </strong>
          </p> 
        </SignupForm>
      </SignupContainer>  
    </Container>
  )
}

export default SignupPage;
