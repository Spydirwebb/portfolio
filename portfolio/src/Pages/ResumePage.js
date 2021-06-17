import React from 'react'
import styled from 'styled-components'
import Skills from '../Components/Skills'
import { InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'

const ResumePage = () => {
    return(
        <div>
            <Skills />
            
            <InnerLayout>
                <Title title={"Resume"} span={"Resume"} />
            </InnerLayout>
        </div>
    )

}

export default ResumePage