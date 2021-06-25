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
                <SmallTitle icon={briefcase} title={'Working Experience'} />
                <SmallTitle icon={school} title={'Education'} />
                <div className='resume-content'>
                    <ResumeItem 
                        year = {'2015-2020'}
                        title = {'Computer Science'}
                        subTitle = {'Sussex University'}
                        text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat elit vitae molestie molestie. Curabitur scelerisque euismod euismod. Donec ultrices'} />
                </div>
            </InnerLayout>
        </ResumeStyled> 
        
    )

}

const ResumeStyled = styled.div`

`;

export default Resume