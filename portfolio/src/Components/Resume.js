import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from './Title'
import SmallTitle from './SmallTitle'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem'

const Resume = () => {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon /> 
    return(
        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem 
                        year = {'2015-Present'}
                        title = {'Full Stack Developer'}
                        subTitle = {'Sussex University'}
                        text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat elit vitae molestie molestie. Curabitur scelerisque euismod euismod. Donec ultrices'} />
                    <ResumeItem 
                        year = {'2015-2020'}
                        title = {'Computer Science Teacher'}
                        subTitle = {'Microsoft Studios'}
                        text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat elit vitae molestie molestie. Curabitur scelerisque euismod euismod. Donec ultrices'} />
                    
                    <ResumeItem 
                        year = {'2010-2017'}
                        title = {'User Interface Designer'}
                        subTitle = {'Google Inc'}
                        text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat elit vitae molestie molestie. Curabitur scelerisque euismod euismod. Donec ultrices'} />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Education'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem 
                        year = {'2015-Present'}
                        title = {'Full Stack Developer'}
                        subTitle = {'Sussex University'}
                        text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat elit vitae molestie molestie. Curabitur scelerisque euismod euismod. Donec ultrices'} />
                    <ResumeItem 
                        year = {'2015-2020'}
                        title = {'Computer Science Teacher'}
                        subTitle = {'Microsoft Studios'}
                        text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat elit vitae molestie molestie. Curabitur scelerisque euismod euismod. Donec ultrices'} />
                    
                    <ResumeItem 
                        year = {'2010-2017'}
                        title = {'User Interface Designer'}
                        subTitle = {'Google Inc'}
                        text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat elit vitae molestie molestie. Curabitur scelerisque euismod euismod. Donec ultrices'} />
                </div>
            </InnerLayout>
        </ResumeStyled> 
        
    )

}

const ResumeStyled = styled.div`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume