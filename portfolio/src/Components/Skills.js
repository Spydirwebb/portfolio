import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
//import ProgressBar from './ProgressBar'
import StarBar from './StarBar'
import StarIcon from '@material-ui/icons/Star';


const Skills = () => {
    return(
        <SkillsStyled>
            <Title title={'My Skills'} span={'Skills'} />
            <InnerLayout>
                <div className="language-title">
                    <h3>Language Experience</h3>
                    <p><StarIcon /> = 1 year</p>
                </div>
                <div className='skills'>
                    <StarBar 
                        title={"HTML/CSS"}
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
                        title={"PYTHON"}
                        years={3}
                    />
                    <StarBar 
                        title={"DJANGO"}
                        years={1}
                    />
                    <StarBar 
                        title={"JAVA"}
                        years={1}
                    />
                    <StarBar 
                        title={"ANDROID"}
                        years={1}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )

}

const SkillsStyled = styled.section`
    .language-title{
        display: flex;
        margin-bottom: 3rem;
        @media screen and (max-width: 700px){
            display: block;
            margin-bottom: 1rem;
        }
        h3{
            color: var(--white-color);
            font-size: 2rem;
        }
        p{
            font-size: 1rem;
            margin-left: 4rem;
            padding-top: .75rem;
            @media screen and (max-width: 700px){
                padding-bottom: 1rem;
                margin-left: 0rem;
            }
            svg{
                font-size: 1rem;
                color: var(--primary-color);
            }
        }
    }
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;

        //@media screen and (max-width: 700px){
        //    grid-template-columns: repeat(1, 1fr);
        //}
    }
`;

export default Skills