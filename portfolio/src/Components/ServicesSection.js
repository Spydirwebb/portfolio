import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
import ServiceCard from './ServiceCard'
import webDesign from '../img/webDesign.jpg'
import AI from '../img/AI.jpg'
import gameDev from '../img/gameDev.jpg'

const ServicesSection = () => {
    return(
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={"Services"} span={"Services"} />
                <div className="services">
                    <ServiceCard 
                        image={webDesign} 
                        title={"Web Design"} 
                        paragraph={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi sodales orci id purus pharetra sollicitudin. Donec pharetra volutpat est, eu."}/>
                    <div className="mid-card"><ServiceCard 
                        image={AI} 
                        title={"Artificial Intelligence"} 
                        paragraph={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi sodales orci id purus pharetra sollicitudin. Donec pharetra volutpat est, eu."}/>
                    </div>
                    <ServiceCard 
                        image={gameDev} 
                        title={"Game Development"} 
                        paragraph={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi sodales orci id purus pharetra sollicitudin. Donec pharetra volutpat est, eu."}/>
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