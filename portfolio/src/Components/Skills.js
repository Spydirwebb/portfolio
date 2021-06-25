import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from './Title'
import ProgressBar from './ProgressBar'

const Skills = () => {
    return(
        <SkillsStyled>
            <Title title={'My Skills'} span={'My Skills'} />
            <InnerLayout>
                <div className='skills'>
                    <ProgressBar 
                        title={'HTML5'}
                        width={'70%'}
                    />
                    <ProgressBar 
                        title={'CSS3'}
                        width={'90%'}
                    />
                    <ProgressBar 
                        title={'JAVASCRIPT'}
                        width={'85%'}
                    />
                    <ProgressBar 
                        title={'JAVA'}
                        width={'60%'}
                    />
                    <ProgressBar 
                        title={'PYTHON'}
                        width={'95%'}
                    />
                    <ProgressBar 
                        title={'React JS'}
                        width={'75%'}
                    />
                    <ProgressBar 
                        title={'UNITY'}
                        width={'75%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )

}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
    }
`;

export default Skills