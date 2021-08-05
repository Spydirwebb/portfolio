import css1 from '../img/portImages/cv_css.png';
import css2 from '../img/portImages/ms.png';
import react1 from '../img/portImages/react_styled.png';
import img2 from '../img/portImages/maya-4.jpg';
import img3 from '../img/portImages/maya-3.jpg';

const React = 'ReactJS'
const CSS = 'CSS'
const Python = 'Python'

const portfolios = [
    {
        id: 1,
        category: ['CSS', 'Python', React],
        tags: ['this', 'that', 'other'],
        image: css1,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Responsive Resume',
        text: 'Created with only HTML and CSS.'
    },
    {
        id: 2,
        category: 'Python',
        tags: ['this', 'that', 'other'],
        image: img3,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'How To Animate In Maya',
        text: 'Number one Animation Application'
    },
    {
        id: 3,
        category: 'Javascript',
        tags: ['this', 'that', 'other'],
        image: img3,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'How To Animate In Maya',
        text: 'Number one Animation Application'
    },
    {
        id: 5,
        category: 'Animation',
        tags: ['this', 'that', 'other'],
        image: img2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'How To Use Blender',
        text: 'Free Animation Software'
    },
    {
        id: 6,
        category: 'React JS',
        tags: ['this', 'that', 'other'],
        image: react1,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Responsive Portfolio Website',
        text: 'Created using different technologies such as Material UI, Styled-Components and more...'
    },
    {
        id: 7,
        category: 'CSS',
        tags: ['this', 'that', 'other'],
        image: css2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Microsoft Website Clone',
        text: 'Created using HTML and CSS'
    }
]

export default portfolios;