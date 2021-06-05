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
        display: flex;
        justify-content: space-between;
        .mid-card{
            margin: 0 1.2rem;
        }
    }
`;

export default ServicesSection