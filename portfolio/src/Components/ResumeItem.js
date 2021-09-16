import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';

const ResumeItem = ({year, title, subTitle, text, link, tags}) => {
    return(
        <ResumeItemStyled>
            <div className='left-content'>
                <p>{year}</p>
            </div>
            <div className='right-content'>
                <h5>{title}</h5>
                <a href={link}>    
                    <h6>{subTitle} {link ? <PersonIcon /> :""}</h6>
                    
                </a>
                <p>{text}</p>
                {(tags).map(tag=> {
                    return <div className="tags">
                            <p>{tag} </p>
                        </div>    
                })}
            </div>
        </ResumeItemStyled>
    )

}

const ResumeItemStyled = styled.div`
    display: flex;
    //@media screen and (max-width: 421px){
    //    p, h5, h6{
    //        font-size: 80%;
    //    }
    //}
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
        //border:2px solid red;
        padding-left: 20px;
        width: 25%;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -11.5px;
            top: 5px;
            height: 17px;
            width: 17px;
            border-radius: 50%;
            background-color: var(--border-color);
            border: 2px solid var(--border-color);
        }
        p{
            display: inline-block;
        }
        @media screen and (max-width: 421px){
            p{
                font-size: 80%;
            }
        }
    }
    .right-content{
        padding-left: 5rem;
        
        position: relative;
        //border: 2px solid green;
        width: 75%;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
            @media screen and (max-width: 421px){
                width: .75rem;
            }
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }
        svg{
            vertical-align: bottom;
            font-size: 2rem;
            color: var(--primary-color);
        }
        .tags{
            display: inline-flex;
            width: fit-content;
            margin-right: 1rem;
            p{    
                font-size: .75rem;
                background-color: var(--background-dark-grey);
                border: 1px solid var(--border-color); 
                padding: .15rem;
            }
        }
        @media screen and (max-width: 421px){
            padding-left: 1rem;
            p{
                font-size: 1rem;
            } 
            h5{
                font-size: 1.32rem;
            } 
            h6{
              font-size: 1rem;
            }
            svg{
                font-size: 1rem;
            }
        }
    }
`;

export default ResumeItem