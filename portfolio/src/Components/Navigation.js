import React, { useState } from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
//import avatar from '../img/avatar.jpg'
import avatarMe from '../img/me_reunion.jpg'

import Brightness6Icon from '@material-ui/icons/Brightness6';
import Switch from '@material-ui/core/Switch';

const Navigation = ({toggleTheme}) => {
    const [checked, setChecked] = useState(false)

    const handleToggle = () => {
        toggleTheme();
        if(checked===false){
            setChecked(true);
        }else{
            setChecked(false);
        }
    }
    
    return(
        <NavigationStyled>
            <div classname="top-sections">
                <div className="avatar">
                    <img src={avatarMe} alt=""/>
                </div>
                <div className="theme">
                    <div className="light-dark-mode">
                        <div classname="left-content">
                            <Brightness6Icon />
                        </div>
                        <div classname="right-content">
                            <Switch 
                                value=""
                                checked={checked}
                                onClick={handleToggle}
                                inputProps={{ 'aria-label': ""}}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class">Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" activeClassName="active-class">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class">Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class">Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 Jeff Webb's Portfolio Website</p>
            </footer>
        </NavigationStyled>
    )

}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }
    .theme{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        .light-dark-mode{
            background-color: var(--background-light-color-2);
            width: 6.5rem;
            height: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                display: flex;
                align-items: center;
                font-size: 1.7rem;
                color: var(--white-color);
            }
        }
    }
    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                @media screen and (max-height: 620px){
                    font-size: .6rem;
                    padding: .2rem 0;
                }
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 2rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
            @media screen and (max-height: 620px){
                font-size: .6rem;
                padding: .2rem 0;
            }
        }
    }
`;
export default Navigation