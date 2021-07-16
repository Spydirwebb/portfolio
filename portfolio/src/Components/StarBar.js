import React from 'react'
import styled from 'styled-components'
import StarIcon from '@material-ui/icons/Star';

const ProgressBar = ({title, years}) => {
    return(
        <ProgressBarStyled>
            <h6>{title}</h6>
            <span>{[
                ...Array(years),
            ].map((year, index) => (
                <StarIcon id={index+1} key={index} />
            ))
            }</span>
        </ProgressBarStyled>
    )

}

const ProgressBarStyled = styled.div`
    .progress-bar{
        display: flex;
        flex-direction: row;
        align-items: center;
        p{
            padding-right: 1.1rem;
        }
        
        .progress{
            position: relative;
            width: 100%;
            height: 0.4rem;
            background-color: var(--border-color);
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                background-color: var(--primary-color);
                
            }
        }
    }
`;

export default ProgressBar