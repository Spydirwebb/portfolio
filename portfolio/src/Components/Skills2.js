import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
import DevIcon from 'devicon-react-svg'



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
                    <DevIcon icon='nodejs_small' />
                    <DevIcon icon='python' />
                    <DevIcon icon='django' />
                    <DevIcon icon='java' />
                    <DevIcon icon='android' />
                    <DevIcon icon='mongodb' />
                </div>
            </InnerLayout>
        </Skills2Styled>
    )

}

const Skills2Styled = styled.section`
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
    /*.skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;

        //@media screen and (max-width: 700px){
        //    grid-template-columns: repeat(1, 1fr);
        //}
    }*/
`;

export default Skills2