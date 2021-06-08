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
        display: flex;

    }
`;

export default ReviewsSection