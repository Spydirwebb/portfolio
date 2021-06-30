import React from 'react'
import styled from 'styled-components'
import {GitHub, Pinterest} from '@material-ui/icons'

const Menu = ({menuItem}) => {
    return (
        <MenuItemStyled >
            {
                menuItem.map((item)=>{
                    return <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt=""/>
                                <ul>
                                    <li>
                                        <a href={item.link1}>
                                            <GitHub />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={item.link2}>
                                            <Pinterest />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.text}</p>
                        </div>
                    </div>
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    .grid-item{
        margin-bottom: 2rem;
        .portfolio-content{
            display: block;
            position: relative;
            h6{
                font-size: 1.5rem;
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            ul{
                display: none;
            }
            
            .portfolio-image{
                &::before{
                    content: "";
                    position: absolute;
                    left: 15px;
                    top: 15px;
                    height: calc(100% - 30px);
                    width: calc(100% - 30px);
                    background-color: white;
                    opacity: 0.9;
                    tranform-origin: 0;
                    transform: scale(1);
                    transition: all .4s ease-in-out;
                }
            }
        }
    }
`;

export default Menu