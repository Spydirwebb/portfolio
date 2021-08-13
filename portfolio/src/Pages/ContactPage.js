import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { send } from 'emailjs-com'
import {MainLayout, InnerLayout} from "../styles/Layouts"
import Title from '../Components/Title'
import PrimaryButton from '../Components/PrimaryButton'

//icons
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem'
import ContactItemMobile from '../Components/ContactItemMobile'

const ContactPage = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isSent, setIsSent] = useState(false)
    const [toSend, setToSend] = useState({
        from_name: '',
        subject: '',
        message: '',
        reply_to: '',
    });

    const breakPoint = 620;
    const Phone = <PhoneIcon />
    const Email = <EmailIcon />
    const Location = <LocationOnIcon />
    const phone1 = "+17752401469"
    const phone2 = ""
    const email1 = "webbjeffery89@gmail.com"
    const email2 = "jwresearchnovice@gmail.com"
    const cityState = "Reno, Nevada"
    const country = "United States"

    const onSubmit = (e) =>{
        e.preventDefault();
        send(
            'service_gby3bg3',
            'template_p8abars',
            toSend,
            'user_XlnsRXA7rZS0dS2FvaNAS'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text)
            setIsSent(true)
        })
        .catch((err) => {
            console.log('FAILED...', err)
        });
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        window.addEventListener("resize", () =>setWidth(window.innerWidth))
    },[])
    

    const MobileContact = () => {
        return (
            <div className='right-content'>
                <ContactItemMobile 
                    icon={Phone}
                    title={'Phone'}
                    contact1={phone1}
                    contact2={phone2} 
                />
                <ContactItemMobile
                    icon={Email}
                    title={'Email'}
                    contact1={email1}
                    contact2={email2} 
                />
                <ContactItemMobile
                    icon={Location}
                    title={'Location'}
                    contact1={cityState}
                    contact2={country} 
                />
            </div>
        )
    }
    const DesktopContact = () => {
        return (
            <div className='right-content'>
                <ContactItem 
                    icon={Phone}
                    title={'Phone'}
                    contact1={phone1}
                    contact2={phone2} 
                />
                <ContactItem
                    icon={Email}
                    title={'Email'}
                    contact1={email1}
                    contact2={email2} 
                />
                <ContactItem
                    icon={Location}
                    title={'Location'}
                    contact1={cityState}
                    contact2={country} 
                />
        </div>
        )
    }
    
    return(
        <MainLayout>
            <ContactPage2Styled>
                <Title title={"Contact"} span={"Contact"} />
                    <InnerLayout className='contact-section'>
                        <div className='left-content'>
                            <div className="contact-title">
                                <h4>Get In Touch</h4>
                            </div>
                            <form className='form' onSubmit={onSubmit}>
                                <div className='form-field'>
                                    <label htmlFor="name">Enter your name* </label>
                                    <input 
                                        type='text' 
                                        id='name' 
                                        name='from_name'
                                        placeholder=''
                                        value={toSend.from_name}
                                        onChange={handleChange} />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor="email">Enter your email* </label>
                                    <input 
                                        type='email' 
                                        id='email' 
                                        name='reply_to'
                                        placeholder=""
                                        value={toSend.reply_to}
                                        onChange={handleChange} />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor="subject">Subject* </label>
                                    <input 
                                        type='text' 
                                        id='subject' 
                                        name='subject' 
                                        placeholder=""
                                        value={toSend.subject} 
                                        onChange={handleChange}/>
                                </div>
                                <div className='form-field text-area'>
                                    <label htlmlFor="text-area">Enter Your Message</label>
                                    <textarea 
                                        id='textarea' 
                                        cols="30" rows="10" 
                                        name='message'
                                        placeholder='Your message'
                                        value={toSend.message}
                                        onChange={handleChange}></textarea>
                                </div>
                                <div className="form-field f-button">
                                    <button type='submit'><PrimaryButton title="Send Email"/></button>
                                </div>
                            </form>
                            <div >{isSent ?  <p className="form-message">Message Sent!</p> : <div></div>}</div>
                        </div>
                        {width>breakPoint ? <DesktopContact /> : <MobileContact />}
                    </InnerLayout>
            </ContactPage2Styled>
        </MainLayout>
    )

}

const ContactPage2Styled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 2.5rem;
                display: flex;
                justify-content: center;
                align-items:center;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, fr);
            grid-row-gap: 2rem;
            width: 100%;
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
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
            button{
                border: none;
            }
            
        }
        .form-message{
                margin-top: 1rem;
                font-style: italic;
                color: chartreuse(--white-color);
            }
    }
`;

export default ContactPage