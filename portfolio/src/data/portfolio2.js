import evernote from '../img/portImages/evernote_image.png'
import stock from '../img/portImages/Stock-Bot--1-.png'
import todo from '../img/portImages/todo.png'
import instagram from '../img/portImages/instagram.png'

const React = "ReactJS"
const CSS = "CSS"
const Python = "Python"
const Firebase = "Firebase"
const Redux = "Redux"
const Materialize = "Materialize"
const Hooks = "Hooks"
const CustomHooks = "Custom Hooks"
const Alpaca = "Alpaca"
const Telegram = "Telegram"
const Stocks = "Stocks"
const Sprite = "Sprite"
const Node = "NodeJS"
const FullStack = "FullStack"
const graphQL = 'graphQL'
const API = "API"

const portfolios = [
    {
        id: 1,
        category: [React],
        tags: [React, Firebase, Redux, Materialize, Hooks, CustomHooks],
        image: evernote,
        link1: 'https://github.com/Spydirwebb/Evernote_clone/tree/step90',
        link2: 'https://www.google.com',
        title: 'Evernote Clone',
        text: 'Created with ReactJS with a Firebase backend and database'
    },
    {
        id: 2,
        category: [React, CSS],
        tags: [React, CSS, Hooks],
        image: todo,
        link1: 'https://github.com/Spydirwebb/Complex-todo-app',
        link2: 'https://www.google.com',
        title: 'Complex Todo App',
        text: 'Obligatory Todo App With Levels of Priority'
    },
    {
        id: 3,
        category: [Python],
        tags: [Python, Alpaca, Telegram, Stocks, API],
        image: stock,
        link1: 'https://github.com/Spydirwebb/stocks',
        link2: 'https://www.google.com',
        title: 'Automated Stock Bot',
        text: 'Stock Bot that interprets data and buys/sells at appropriate times'
    },
    {
        id: 5,
        category: [React, CSS, Node],
        tags: [React, CSS, Sprite, Node, FullStack, graphQL],
        image: instagram,
        link1: 'https://github.com/Spydirwebb/instaclone',
        link2: 'https://www.google.com',
        title: 'Instagram Clone',
        text: 'Full Stack Instagram using React, Node, and graphQL'
    },/*
    {
        id: 6,
        category: 'React JS',
        tags: [],
        image: react1,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Responsive Portfolio Website',
        text: 'Created using different technologies such as Material UI, Styled-Components and more...'
    },
    {
        id: 7,
        category: 'CSS',
        tags: [],
        image: css2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Microsoft Website Clone',
        text: 'Created using HTML and CSS'
    }*/
]

export default portfolios;