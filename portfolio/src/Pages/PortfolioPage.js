import React, { useState } from 'react'
import { MainLayout, InnerLayout } from "../styles/Layouts"
import Title from '../Components/Title'
import portfolios from '../data/portfolio'
import Menu from '../Components/Menu'
import Button from '../Components/Button'

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

const PortfolioPage = () => {
    const [menuItem, setMenuItems] = useState(portfolios);
    const [button] = useState(allButtons);
    
    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }

    return(
        <MainLayout>
            <Title title={'Portfolio'} span={'Portfolio'} />
            <InnerLayout>
                <Button filter={filter} buttons = {button}/>
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )

}

export default PortfolioPage