import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
import DevIcon from '../img/svg/DevIcon'
import DevIconFilled from '../img/svg/DevIconFilled'



const Skills2 = () => {
    
    return(
        <Skills2Styled>
            <Title title={'My Skills'} span={'Skills'} />
            <InnerLayout>
                <div className="language-title">
                    <h3>Language Experience</h3>
                </div>
                <div className='skills'>
                    <DevIcon icon='html5' />
                    <DevIcon icon='css3' />
                    <DevIcon icon='javascript' />
                    <DevIcon icon='react' />
                    <DevIcon icon='nodejs' />
                    <DevIcon icon='python' />
                    <DevIcon icon='django' />
                    <DevIcon icon='java' />
                    <DevIcon icon='android' />
                    <DevIcon icon='mongodb' />
                </div>
                <div className="skills">
                    <DevIconFilled icon='html5' />
                    <DevIconFilled icon='css3' />
                    <DevIconFilled icon='javascript' />
                    <DevIconFilled icon='react' />
                    <DevIconFilled icon='nodejs' />
                    <DevIconFilled icon='python' />
                    <DevIconFilled icon='django' />
                    <DevIconFilled icon='java' />
                    <DevIconFilled icon='android' />
                    <DevIconFilled icon='mongodb' />
                </div>
            </InnerLayout>
        </Skills2Styled>
    )

}

const Skills2Styled = styled.section`
    .skills{
        display: flex;
        justify-content: space-between;
        svg{
            width: 3rem;
        }
    }
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
`;

export default Skills2