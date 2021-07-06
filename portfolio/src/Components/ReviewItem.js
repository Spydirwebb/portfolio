import React from 'react'
import styled from 'styled-components'

const ReviewItem = ({text}) => {
    return(
        <ReviewItemStyled>
            <p>{text}</p>
        </ReviewItemStyled>
    )

}

const ReviewItemStyled = styled.div`
    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    width: 100%;

    
    &::after{
        content: "";
        position: absolute;
        left: 2rem;
        border-width: .8rem;
        top: 100%;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
`;

export default ReviewItem