import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon from '@material-ui/icons/YouTube'

import Particles from '../Components/Particles'

const HomePage = () => {
    return(
        <HomePageStyled>
            <div className="p-particles-js">
                <Particles />
            </div>
            <div className="typography">
                <h1>Hi I'm <span>Lorem Ipsum</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi sodales orci id purus pharetra sollicitudin. 
                    Donec pharetra volutpat est, eu.
                </p>
                <div className="icons">
                    <a href="https://www.lipsum.com/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.lipsum.com/" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.lipsum.com/" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )

}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1 rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .3s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;

                }
                svg{
                    margin: 0.5rem;
                }
            }
            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
        }
            .i-github{
                &:hover{
                    border: 2px solid #5f4687;
                    color: #5f4687;
                }
        }      
        }
    }

`;

export default HomePage;