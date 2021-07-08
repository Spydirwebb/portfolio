import React from 'react'
import styled from 'styled-components'

const Button = ({filter, buttons}) => {
    return(
        <ButtonsStyled>
            {
                buttons.map((button, i) => {
                    return <ButtonStyled key={i} onClick={() => filter(button)}>
                        {button}
                    </ButtonStyled>
                })
            }
        </ButtonsStyled>
    )

}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .4rem 2rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin-bottom: 2.6rem;
    &:active , &:focus{
        background-color: var(--primary-color);
        transform: translateY(-5px);
    }
    &:hover{
        background-color: var(--primary-color);
    }

    &:not(:last-child){
        margin-right: .6rem;
    }
`;

const ButtonsStyled = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 2.5rem auto;
`;

export default Button