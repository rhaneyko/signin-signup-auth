import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;

    background-color: ${props => props.theme.colors.backgroundContainer};
`;

export const Title = styled.h1`

    align-self: center;
    color: #000;

    padding-left: 32px;
    padding-top: 10px;

    font-size: 2.5rem;
    font-weight: bold;
`;

export const SigninContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 20vw;
    height: 40vh;

    border-radius: 10px;

    background-color: ${props => props.theme.colors.background};

    transition: box-shadow .3s;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }  
`;
export const SigninForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`;
export const SigninInput = styled.input`
    width: 17vw;
    height: 5vh;

    padding-left: 5px;

    border-radius: 5px;
    border: 1px solid #E5E5E5;
    margin: 15px;

    background-color: ${props => props.theme.colors.inputBackground};

`;
export const InputEmail = styled.div``;
export const InputPassword = styled.div``;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 17vw;
    height: 5vh;
    
    margin-top: 20px;

    border: 1px solid ${props => props.theme.colors.borderButton};
    border-radius: 5px;
    
    background-color: ${props => props.theme.colors.button};
`;
export const TextButton = styled.p`
    color: ${props => props.theme.colors.buttonText};
    font-size: 1.3rem;
`;
