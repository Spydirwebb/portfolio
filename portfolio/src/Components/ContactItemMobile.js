import React from 'react'
import styled from 'styled-components'


const ContactItemMobile = ({icon, title, contact1, contact2}) => {
    
    return(
        <ContactItemStyled>
            <div className="top-content">
                <p>
                    {icon}
                </p>
                <h6>{title}</h6>
            </div>
            <div className="bottom-content">
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
        </ContactItemStyled>
    )

}

const ContactItemStyled = styled.div`
    padding: 1.5rem;
    background-color: var(--background-dark-grey);
    display:flex;
    flex-direction: column;
    align-items: center;
    .top-content{
        display: flex;
        flex-direction: row;
        border: 1px solid var(--border-color);
        padding: .75rem;
        margin-bottom: .5rem;
        svg{
            align-items: center;
            font-size: 1.5rem;
        }
        h6{
            margin-left: .5rem;
            padding: .1rem;
        }
    }
    .bottom-content{
        display: block;
        h6{
            color: var(--white-color);
        }
        p{
            text-align: center;
            font-size: 1rem;
            padding: .5rem;
        }
    }
`;

export default ContactItemMobile