import React from 'react'
import Menu from './Menu'
import '../assets/styles/Menu.css'

const Layout  = ({children}) => (
    <div className="App">
        {children}
        <Menu/>
    </div>
)

export default Layout