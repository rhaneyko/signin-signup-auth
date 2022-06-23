import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    min-height: 100vh; 

    background-color: ${props => props.theme.colors.backgroundContainer};
`;

export const Title = styled.h2`
    padding: 0 0 10px;
`;

export const SigninContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 400px;
    max-width: 100%;
    overflow: hidden;

    border-radius: 10px;

    padding: 10px 20px;
    
    background-color: ${props => props.theme.colors.background};

    transition: box-shadow .3s;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
`;

export const SigninInput = styled.input`
    width: 100%;
    height: 45px;

    margin: 10px 0;
    padding-left: 10px;

    border-radius: 5px;
    border: 1px solid #E5E5E5;

    background-color: ${props => props.theme.colors.inputBackground};
`;

export const InputText = styled.p`
    font-size: 13px;
    margin-left: 5px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    padding: 8px;
    
    margin-top: 10px;

    border: 1px solid ${props => props.theme.colors.borderButton};
    border-radius: 5px;
    
    background-color: ${props => props.theme.colors.button};
   
`;
export const TextButton = styled.p`
    color: ${props => props.theme.colors.buttonText};
    font-size: 15px;
`;
export const InputEmail = styled.div`
    width: 100%;
`;
export const InputPassword = styled.div`
    width: 100%;

`;
