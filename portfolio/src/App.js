import styled from 'styled-components'
import { Route, Switch as Switching} from 'react-router-dom'
import { useEffect, useState } from 'react'
//components
import Sidebar from './Components/Sidebar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import BlogsPage from './Pages/BlogsPage'
import ContactPage from './Pages/ContactPage'
import PortfolioPage from './Pages/PortfolioPage'
import ResumePage from './Pages/ResumePage'
import LibraryPage from './Pages/LibraryPage'

import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";


const App = () => {
  const [theme, setTheme] = useState("dark-theme")
  const [navToggle, setNavToggle] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  const toggleTheme = () => {
    if(theme ==='light-theme'){
      setTheme('dark-theme');
    }else{
      setTheme('light-theme');
    }
  }

  return (
        <div className="App">
            <Sidebar navToggle={navToggle} toggleTheme={toggleTheme} setNavToggle={setNavToggle}/>
            <div className="hamburger-menu">
                <IconButton onClick={()=>setNavToggle(!navToggle)}>
                    <MenuIcon />
                </IconButton>
            </div>
            <MainContentStyled>
                <div className="lines">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                    <div className="line-4"></div>
                </div>
                <Switching>
                    <Route path={process.env.PUBLIC_URL + "/"} exact>
                        <HomePage />
                    </Route>
                    <Route path={process.env.PUBLIC_URL +"/about"} exact>
                        <AboutPage />
                    </Route>
                    <Route path={process.env.PUBLIC_URL +"/resume"} exact>
                        <ResumePage />
                    </Route>
                    <Route path={process.env.PUBLIC_URL +"/portfolios"} exact>
                        <PortfolioPage />
                    </Route>
                    <Route path={process.env.PUBLIC_URL +"/blogs"} exact>
                        <BlogsPage />
                    </Route>
                    <Route path={process.env.PUBLIC_URL +"/library"} exact>
                        <LibraryPage />
                    </Route>
                    <Route path={process.env.PUBLIC_URL +"/contact"} exact>
                        <ContactPage />
                    </Route>
                  </Switching>
              </MainContentStyled>
      </div>
  );
}

const MainContentStyled = styled.main`
    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;
    @media screen and (max-width: 1200px){
        margin-left: 0px;
    }
    
    .lines{
        position: absolute;
        min-height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        opacity: 0.4;
        z-index: -1;
        .line-1, .line-2, .line-3, .line-4{
            width: 1px;
            min-height: 100vh;
            background-color: var(--border-color);
        }
    }
`;
export default App;
