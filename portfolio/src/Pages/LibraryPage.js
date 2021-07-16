import React from 'react'
import styled from 'styled-components'

import Title from '../Components/Title'
import { MainLayout } from '../styles/Layouts'

const LibraryPage = () => {
    return(
        <LibraryPageStyled>
            <MainLayout >
                <Title title={"My Library"} span={"Library"}/>
            </MainLayout>
            
        </LibraryPageStyled>
    )

}

const LibraryPageStyled = styled.div`

`;

export default LibraryPage