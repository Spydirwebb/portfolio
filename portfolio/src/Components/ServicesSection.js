import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
import ServiceCard from './ServiceCard'
//import webDesign from '../img/webDesign.jpg'
import responsive from '../img/responsive.jpg'
import ai from '../img/ai.jpg'
import mobile from '../img/mobile.png'
//import AI from '../img/AI.jpg'
//import gameDev from '../img/gameDev.jpg'

const ServicesSection = () => {
    return(
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={"Services"} span={"Services"} />
                <div className="services">
                    <ServiceCard 
                        image={responsive} 
                        title={"Web Development"} 
                        tagline={"Everything needs a website"}
                        paragraph={"Full-Stack React development that focuses on responsive, clean, and elegant code."}/>
                    <div className="mid-card"><ServiceCard 
                        image={mobile} 
                        title={"Mobile App Development"} 
                        tagline={"Since everyone has an app idea"}
                        paragraph={"App design and development using intutive and attractive interfaces."}/>
                    </div>
                    <ServiceCard 
                        image={ai} 
                        title={"Data Science/ ML, AI"} 
                        tagline={"I'm a neuroscientist, so I had to"}
                        paragraph={"Data science striving towards machine learning and artificial intelligence"}/>
                </div>
            </ServicesSectionStyled>    
        </InnerLayout>
        
    )

}

const ServicesSectionStyled = styled.div`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width: 1000px){
            flex-direction: column;
        }
        @media screen and (max-width: 950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 650px){
            grid-template-columns: repeat(1, 1fr);
        }

    }
`;

export default ServicesSection