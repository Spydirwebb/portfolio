import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
//import DevIcon from '../img/svg/DevIcon'
import DevIconFilled from '../img/svg/DevIconFilled'



const Skills2 = () => {
    
    return(
        <Skills2Styled>
            <Title title={'My Skills'} span={'Skills'} />
            <InnerLayout>
                <div className="language-title">
                    <h3 className="title-full">Language Experience</h3>
                    <h3 className="title-small">Language Exp.</h3>
                </div>
                {/*<div className='skills'>
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
                </div> /* */}
                <div className="skills">
                    <DevIconFilled icon='html5' />
                    <DevIconFilled icon='css3' />
                    <DevIconFilled icon='javascript' />
                    <DevIconFilled icon='react' />
                    <DevIconFilled icon='nodejs' />
                    <DevIconFilled icon='mongodb' />
                    <DevIconFilled icon='python' />
                    <DevIconFilled icon='django' />
                    <DevIconFilled icon='java' />
                    <DevIconFilled icon='android' />
                    
                </div>
            </InnerLayout>
        </Skills2Styled>
    )

}

const Skills2Styled = styled.section`
    .skills{
        padding-top: 1.5rem;
        justify-items: center;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-row-gap: 1.5rem;
        grid-column-gap: 1rem;
        
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(4, 1fr);
        }
        @media screen and (max-width: 500px){
            grid-template-columns: repeat(3, 1fr);
        }

        svg{
            width: 3rem;
        }
    }
    .language-title{
        display: flex;
        margin-bottom: 3rem;
        .title-small{
            display: none;
        }
        @media screen and (max-width: 400px){
            .title-full{
                display: none;
            }
            .title-small{
                display: block;
            }
        }
        h3{
            color: var(--white-color);
            font-size: 2rem;
        }
    }
`;

export default Skills2