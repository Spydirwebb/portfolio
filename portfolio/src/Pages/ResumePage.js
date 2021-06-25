import React from 'react'
import styled from 'styled-components'
import Skills from '../Components/Skills'
import { MainLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import Resume from '../Components/Resume'

const ResumePage = () => {
    return(
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
    )

}

export default ResumePage