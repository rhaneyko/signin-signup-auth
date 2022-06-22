import React from 'react'

import {
    Container,
    SignupContainer,
    Title,
    SignupForm,
    SignupFormInput,
    InputName,
    InputEmail,
    InputPassword,
    InputConfirmPassword,
    Text,
    Button,
    TextButton,
} from './styles'


const SignupPage = () => {
const form = document.getElementById('form')
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListner('submit', (e) => {
    e.preventDefault();

    checkInputs()
})

function checkInputs(){
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

}

if( usernameValue === '' || emailValue === '' || passwordValue === '' || confirmPasswordValue === '' ){
  alert('Preencha todos os campos');
}else {
  setSuccessFor(username)
}

const formControls = form.querySelectorAll('input')

const formIsValid = [...formControls].every((formControll) => {
  return formControll.className === 'success'
})

if(formIsValid){
  alert('Formulário válido')
}

function setErrorFor(input){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
}
  return (
    <Container>
      <SignupContainer>
        <Title>Criar uma conta</Title>
        <SignupForm>
          <InputName>
            <Text>Nome</Text>
            <SignupFormInput />
          </InputName>
          <InputEmail>
            <Text>E-mail</Text>
            <SignupFormInput />
          </InputEmail>
          <InputPassword>
            <Text>Senha</Text>
            <SignupFormInput />
          </InputPassword>
          <InputConfirmPassword>
            <Text>Confirmar senha</Text>
            <SignupFormInput />
          </InputConfirmPassword>

          <Button>
             <TextButton>Criar conta</TextButton>
          </Button>
        </SignupForm>
      </SignupContainer>  
    </Container>
  )
}

export default SignupPage;
