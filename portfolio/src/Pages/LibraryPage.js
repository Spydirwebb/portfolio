import React from 'react'
import styled from 'styled-components'

import Title from '../Components/Title'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import BookSection from '../Components/BookSection'

const LibraryPage = () => {
    return(
        <LibraryPageStyled>
            <MainLayout >
                <Title title={"My Library"} span={"Library"}/>
                <InnerLayout>
                    <div className="books"></div>
                        <BookSection />
                    <div className="courses"></div>
                </InnerLayout>
            </MainLayout>
            
        </LibraryPageStyled>
    )

}

const LibraryPageStyled = styled.div`

`;

export default LibraryPage