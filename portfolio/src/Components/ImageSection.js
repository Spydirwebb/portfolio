import React from 'react'
import styled from 'styled-components'
import resume from '../img/resume.jpg'

const ImageSection = () => {
    return(
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume image" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Lorem Ipsum</span></h4>
                </div>
                <p className="paragraphy">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec ut congue arcu. Etiam pellentesque interdum vulputate. 
                    Quisque convallis leo in nunc tincidunt congue. Cras at porttitor 
                    magna, vel commodo tellus.
                </p>
                <div className="about-info">
                    
                </div>
            </div>
        </ImageSectionStyled>
    )

}

const ImageSectionStyled = styled.div`

`;

export default RenameMe