import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

const TagSearch = ({searchTerm, setSearchTerm, searchForTags}) => {
    return(
        <TagSearchStyled>
            <form className="tag-search" onSubmit={searchForTags}>
                <input className="tag-search-bar" type="text" placeholder="Search Tags..." value={searchTerm} onChange={e=> setSearchTerm(e.target.value)}/>
                <button className="tag-search-button" value="submit" ><SearchIcon /></button>
            </form>
        </TagSearchStyled>
    )

}

const TagSearchStyled = styled.div`
    .tag-search{
        display: flex;
        justify-content: center;
        padding-bottom: 3rem;
        height: 1.5rem;

       .tag-search-bar{
            background-color: var(--background-dark-grey);
            height: 1.5rem;
            color: var(--font-light-color);
            border: 2px solid var(--border-color);
            border-right: none;
            
        }
        .tag-search-button{
            height: 1.5rem;
            background-color: var(--background-light-color-2);
            color: var(--font-light-color);
            border: 2px solid var(--border-color);
            border-left: none;

            &:hover{
                cursor: pointer;
                background-color: var(--primary-color-light);
                color: white;
            }
        } 
    }
`;

export default TagSearch