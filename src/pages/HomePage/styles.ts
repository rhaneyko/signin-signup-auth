import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    min-height: 100vh; 

    background-color: ${props => props.theme.colors.backgroundContainer};
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 300px;
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

export const Title = styled.h2``;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    padding: 5px;
    
    margin-top: 10px;

    border: 1px solid ${props => props.theme.colors.borderButton};
    border-radius: 5px;
    
    background-color: ${props => props.theme.colors.button};
`;

export const TextButton = styled.p`
    color: ${props => props.theme.colors.buttonText};
    font-size: 15px;
`;

