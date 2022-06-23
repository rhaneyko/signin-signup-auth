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

    padding-top: 10px;

    font-size: 2.5rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1.0rem;
        padding: 5px;
    }
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

    @media (max-width: 768px) {
        width: 92vw;
        height: 32vh;
    }
`;
export const SigninForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        margin-top: 15px;
    }


`;
export const SigninInput = styled.input`
    width: 17vw;
    height: 5vh;
    
    margin: 15px;
    padding-left: 10px;

    border-radius: 5px;
    border: 1px solid #E5E5E5;

    background-color: ${props => props.theme.colors.inputBackground};
    @media (max-width: 768px) {
        width: 85vw;
        height: 4vh;

        margin: 10px;
    }

`;

export const InputText = styled.p`
    margin-left: 10px;

    @media (max-width: 768px) {
        font-size: 0.8rem;
}
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
    @media (max-width: 768px) {
        width: 80vw;
        height: 4vh;

        margin-top: 15px;
    }  
`;
export const TextButton = styled.p`
    color: ${props => props.theme.colors.buttonText};
    font-size: 1.3rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;
