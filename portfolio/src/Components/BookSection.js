import React from 'react'
import styled from 'styled-components'

import { books } from '../data/books'

const BookSection = () => {
    return(
        <BookSectionStyled>
            {
                books.map((book)=>{
                    return <div  key={book.id} className="grid-item">
                        <div className="book-content">
                            <a href={book.link}>
                                <img src={book.cover} alt="title" />
                                <div className="book-title">
                                    {book.title}
                                </div>
                            </a>
                                <p>{book.author}</p>
                        </div>
                    </div>
                })
            }
        </BookSectionStyled>
    )

}

const BookSectionStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: 920px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 670px){
        grid-template-columns: repeat(2, 1fr);
    }
    .grid-item{
        
        .book-content{
            display: block;
            position: relative;
            overflow: hidden;
            padding: 1rem;
            background-color: var(--background-dark-grey);
            img{
                width: 100%;
                height: 35vh;
                padding-bottom: 1rem;
                border-bottom: 1px solid var(--border-color);
                @media screen and (max-width: 1900px){
                    height: auto;
                }
                @media screen and (max-width: 415px){
                    height: auto;
                }
            }
            .book-title{
                color: var(--white-color);
                font-size: 1rem;
            }
            p{
                font-size: .75rem;
            }
        }
    }
`;

export default BookSection