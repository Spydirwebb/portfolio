import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import Particles from '../Components/Particles'
import DevIcon from '../img/svg/DevIcon';

const HomePage = () => {
    return(
        <HomePageStyled>
            <div className="p-particles-js">
                <Particles />
            </div>
            <div className="typography">
                <h1>Hi I'm <span>Jeff Webb</span></h1>
                <p>Full-Stack Web Developer</p>
                <p>Mobile App Developer</p>
                <p>Python Software Developer</p>
                <div className="icons">
                    <a href="https://www.facebook.com/jeff.webb.779/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/jeffery-webb-8780b879/" className="icon i-linkedIn">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/Spydirwebb" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href='https://codepen.io/spydirwebb' className="icon i-codepen">
                        <DevIcon icon='codepen'/>
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
            margin-top: 1rem;
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
            .i-linkedIn{
                &:hover{
                    border: 2px solid #0A66C2;
                    color: #0A66C2;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5f4687;
                    color: #5f4687;
                }
            }
            .i-codepen{
                fill: var(--font-light-color);
                width: 2.5rem;
                &:hover{
                    border: 2px solid var(--white-color);
                    fill: var(--white-color);
                }
            }      
        }
    }

`;

export default HomePage;