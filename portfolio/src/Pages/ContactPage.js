import React from 'react'
import styled from 'styled-components'
import {MainLayout, InnerLayout} from "../styles/Layouts"
import Title from '../Components/Title'
import PrimaryButton from '../Components/PrimaryButton'

//icons
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem'

const ContactPage = () => {
    const Phone = <PhoneIcon />
    const Email = <EmailIcon />
    const Location = <LocationOnIcon />
    
    return(
        <MainLayout>
            <Title title={"Contact"} span={"Contact"} />
            <ContactPageStyled>
                <InnerLayout className='contact-section'>
                    <div className='left-content'>
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className='form'>
                            <div className='form-field'>
                                <label htmlFor="name">Enter your name* </label>
                                <input type='text' id='name'/>
                            </div>
                            <div className='form-field'>
                                <label htmlFor="email">Enter your email* </label>
                                <input type='email' id='email'/>
                            </div>
                            <div className='form-field'>
                                <label htmlFor="subject">Subject* </label>
                                <input type='text' id='subject'/>
                            </div>
                            <div className='form-field text-area'>
                                <label htlmlFor="text-area">Enter Your Message</label>
                                <textarea name='textarea' id='textarea' cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field">
                                <PrimaryButton title="Send Email"/>
                            </div>
                        </form>
                    </div>
                    <div className='right-content'>
                        <ContactItem 
                            icon={Phone}
                            title={'Phone'}
                            contact1={'+7751111111'}
                            contact2={'+7751111111'} 
                        />
                        <ContactItem 
                            icon={Email}
                            title={'Email'}
                            contact1={'webb.jeffery.89@gmail.com'}
                            contact2={''} 
                        />
                        <ContactItem 
                            icon={Location}
                            title={'Location'}
                            contact1={'Reno, Nevada'}
                            contact2={'United States'} 
                        />
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )

}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        .right-content{
            display: flex;
            flex-direction: column;
        }
        .contact-title{
            h4{
                color: var(--white-color);
                paddding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: 0.8rem 1rem;
                }
            }
        }
    }
`;

export default ContactPage