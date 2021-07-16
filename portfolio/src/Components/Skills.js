import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
//import ProgressBar from './ProgressBar'
import StarBar from './StarBar'

const Skills = () => {
    return(
        <SkillsStyled>
            <Title title={'My Skills'} span={'My Skills'} />
            <InnerLayout>
                <div className='skills'>
                    <StarBar 
                        title={"HTML5"}
                        years={4}
                    />
                    <StarBar 
                        title={"CSS3"}
                        years={4}
                    />
                    <StarBar 
                        title={"JAVASCRIPT"}
                        years={4}
                    />
                    <StarBar 
                        title={"REACT JS"}
                        years={3}
                    />
                    <StarBar 
                        title={"NODE JS"}
                        years={3}
                    />
                    <StarBar 
                        title={"JAVA"}
                        years={1}
                    />
                    <StarBar 
                        title={"PYTHON"}
                        wyears={3}
                    />
                    <StarBar 
                        title={"C#"}
                        years={1}
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

        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills