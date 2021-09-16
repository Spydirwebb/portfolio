import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
import SmallTitle from './SmallTitle'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem'
import resume from '../img/resume/webb.resume.dev.pdf'
import PrimaryButton from './PrimaryButton'

const Resume = () => {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon /> 
    return(
        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            <div className='download'>
                <a href={resume} target='_blank' rel='noopener noreferrer'>
                    <PrimaryButton title={'Download'} />
                </a>
            </div>
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Professional Experience'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem 
                        year = {'2020 - Present'}
                        title = {'Database Administrator/ Clinical Research Coordinator'}
                        subTitle = {'Renown Health'}
                        text = {'Created programs to reduce errors and redundant work by 300%. Spearheaded digitization of research charts for more accurate data analytics. Administrated database of patient information'} 
                        tags = {['DBA','Python','Excel', 'React']}
                    />
                    <ResumeItem 
                        year = {"2020"}
                        title = {"Project Manager/ Clinical Reseach Coordinator"}
                        subTitle = {"Allied Clinical Research"}
                        text = {"Increased recruitment of subjects by 150% using database queries. Reduced need of sponsor oversight with automated reporting systems"}
                        tags = {['SQL', 'HTML/CSS', 'Excel']}
                    />
                    <ResumeItem 
                        year = {'2018 - 2019'}
                        title = {'Clinical Research Coordinator'}
                        subTitle = {'ROC Foundation'}
                        text = {'Created clinical trial management system to track and analyze data while increasing invoicing accuracy and compliance. Analyzed patient data pool to increase recruitment. Grew revenue for a small clinical research site by 200%'}
                        tags = {['HTML/CSS', 'Python', 'SQL', 'Excel']}
                    />
                    <ResumeItem 
                        year = {'2015'}
                        title = {'Undergraduate Research Assistant'}
                        subTitle = {'University of Nevada Reno'}
                        text = {'Designed new trial system for more intuitive UI and increased study enrollment by 50%'}
                        tags = {['SQL', 'R', 'Excel']}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem 
                        year = {'2020 - Present'}
                        title = {'Associate Android Development'}
                        subTitle = {'Grow with Google'}
                        text = {'Using Googles\'s structured learning to study android development in Kotlin and Java'} 
                        tags = {['Android','Java', 'Kotlin']}
                    />
                    <ResumeItem 
                        year = {'2017 - Present'}
                        title = {'Full Stack Development'}
                        subTitle = {'FreeCodeCamp'}
                        text = {'Using FreeCodeCamp\'s structured learning to study front end development, React, back end development with Node, database design with NoSQL and SQL, and scientific computing with Python'} 
                        link = {"https://www.freecodecamp.org/spydirwebb"}
                        tags = {['React', 'Node', 'HTML/CSS/JS','NoSQL', 'SQL', 'Python']}
                    />
                    <ResumeItem 
                        year = {'2018 - Present'}
                        title = {'Language Proficiencies'}
                        subTitle = {'codecademy'}
                        text = {'Using Codecademy\'s structured learning to learn Python, Java, and practice other skills'} 
                        link ={"https://www.codecademy.com/profiles/Spydirwebb89"}
                        tags = {['Python', 'Java', 'CSS', 'C#']}
                    />
                    <ResumeItem 
                        year = {'2009'}
                        title = {'Computer Science'}
                        subTitle = {'University of Nevada Reno'}
                        text = {'Learned C++ while studying computer science as part of electrical engineering program'} 
                        tags = {['C++']}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled> 
        
    )

}

const ResumeStyled = styled.div`
    .download{
        margin-top: 3rem;
    }
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