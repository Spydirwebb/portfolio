import React from 'react'
import styled from 'styled-components'
import beardedBW from '../img/beardedBW.jpg'
import PrimaryButton from './PrimaryButton'

const ImageSection = () => {
    return(
        <ImageSectionStyled>
            <div className="left-content">
                <img src={beardedBW} alt="resume" />
            </div>
            <div className="right-content">
                <h4>I am <span>Lorem Ipsum</span></h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec ut congue arcu. Etiam pellentesque interdum vulputate. 
                    Quisque convallis leo in nunc tincidunt congue. 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>  
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Lorem Ipsum</p>
                        <p>: 36</p>  
                        <p>: Spanish</p>
                        <p>: Spanish, French, English</p>
                        <p>: London, United Kingdom</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    )

}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    .left-content{
        width: 100%;
        height: 63vh;
        img{
            height: 100%;
            width: 90%;
            object-fit: cover;
        }
    }
    .right-content{
        
        h4{
            font-size: 2rem;
            font-color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            padding-bottom: 1.5rem;
            display: flex;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
            }
        }
    }
`;

export default ImageSection