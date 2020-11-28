import React from 'react'
import Menu from './Menu'
import '../assets/styles/Menu.css'
import Header from './Header'

const Layout  = ({children}) => (
    <div className="App">
        <Header/>
        {children}
        <Menu/>
    </div>
)

export default Layout