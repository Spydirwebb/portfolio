import React from 'react'
import styled from 'styled-components'
//import beardedBW from '../img/beardedBW.jpg'
import meBW from '../img/me_bw.jpg'
import resume from '../img/resume/webb.resume.dev.pdf'
import PrimaryButton from './PrimaryButton'

const ImageSection = () => {
    return(
        <ImageSectionStyled>
            <div className="left-content">
                <img src={meBW} alt="resume" />
            </div>
            <div className="right-content">
                <h4>I am <span>Jeff Webb</span></h4>
                <p className="paragraph">
                    I am a <span>Full-Stack Web Developer</span> based in Reno, Nevada. 
                    I enjoy building intuitive and functional websites in <span>React</span>.
                    I am a <span>self-taught</span> developer with a background in science, 
                    who learned programming to advertise and make data analysis easier, 
                    and loved it too much to stop. 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>  
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Jeff Webb</p>
                        <p>: 31</p>  
                        <p>: English, Italian</p>
                        <p>: Reno, Nevada</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <a href={resume} target='_blank' rel='noopener noreferrer'>
                    <PrimaryButton title={'Download CV'} />
                </a>
            </div>
        </ImageSectionStyled>
    )

}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width: 1000px){
        flex-direction: column;
        .left-content{
            margin-bottom : 2rem;
        }    
    }
    .left-content{
        width: 100%;
        //height: 88vh;
        height: 86vh;
        img{
            height: 100%;
            width: 100%;
            //height: 100%;
            //width: auto;
            object-fit: cover;
        }
    }
    .right-content{
        
        h4{
            font-size: 2rem;
            color: var(--white-color);
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
    }
`;

export default ImageSection