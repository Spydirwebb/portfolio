import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
import ReviewItem from './ReviewItem'

const ReviewsSection = () => {
    return(
        <ReviewsSectionStyled>
            <Title title={"Reviews"} span={"Reviews"}/>
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum dolor at sem."} />
                    <ReviewItem text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum dolor at sem."} />
                </div>
            </InnerLayout>
        </ReviewsSectionStyled>
    )

}

const ReviewsSectionStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width: 650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSection