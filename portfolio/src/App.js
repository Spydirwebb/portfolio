import styled from 'styled-components'
import { Route, Switch as Switching } from 'react-router-dom'
import { useEffect, useState } from 'react'
//components
import Sidebar from './Components/Sidebar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import BlogsPage from './Pages/BlogsPage'
import ContactPage from './Pages/ContactPage'
import PortfolioPage from './Pages/PortfolioPage'
import ResumePage from './Pages/ResumePage'

import Brightness6Icon from '@material-ui/icons/Brightness6';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";


function App() {
  const [theme, setTheme] = useState("dark-theme")
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  const toggleTheme = () => {
    if(theme ==='light-theme'){
      setTheme('dark-theme');
      setChecked(false);
    }else{
      setTheme('light-theme');
      setChecked(true);
    }
  }

  return (
    <div className="App">
      <Sidebar />
          <div className="theme">
            <div className="light-dark-mode">
              <div classname="left-content">
                  <Brightness6Icon />
              </div>
              <div classname="right-content">
                  <Switch 
                    value=""
                    checked={checked}
                    onClick={toggleTheme}
                    inputProps={{ 'aria-label': ""}}
                  />
              </div>
            </div>
          </div>
          <div className="hamburger-menu">
            <IconButton>
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
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/resume" exact>
                <ResumePage />
              </Route>
              <Route path="/portfolio" exact>
                <PortfolioPage />
              </Route>
              <Route path="/blogs" exact>
                <BlogsPage />
              </Route>
              <Route path="/contact" exact>
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
    
    .light-dark-mode{
      position: absolute;
      right: 0;
      top: 10%;
      background-color: var(--background-light-color-2);
      width: 6.5rem;
      height: 2.5rem;
      z-index: 15;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        display: flex;
        align-items: center;
        font-size: 1.7rem;
        color: var(--white-color);
      }
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
