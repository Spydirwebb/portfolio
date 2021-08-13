import React from 'react'
import styled from 'styled-components'
import Blogs from "../data/blogs"
import Title from '../Components/Title'
import {MainLayout, InnerLayout} from '../styles/Layouts'

const BlogsPage = () => {
    return(
        <MainLayout>
            <BlogsStyled>
                <Title title={"Blogs"} span={"Blogs"} />
                <InnerLayout className={"blog"}>
                    <h2>No blogs to display, yet</h2>
                    {/*
                        Blogs.map((blog)=>{
                            return <div  key={blog.id} className={"blog-item"}>
                                <div className="image">
                                    <img src={blog.image} alt="blog" />
                                </div>
                                <div className="title">
                                    <a href={blog.link}>
                                        {blog.title}
                                    </a>
                                </div>
                            </div>
                        })
                    */}
                </InnerLayout>
            </BlogsStyled>
        </MainLayout>
    )
}
const BlogsStyled = styled.div`
    .blog{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }
        .blog-item{
            background-color: var(--background-dark-grey);
            padding: 1rem 1rem;
            
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            img{
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
                }
            }
        }
        .title{
            a{
                padding: 2rem 0;
                font-size: 1.8rem;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
    }
`;

export default BlogsPage