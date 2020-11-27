import React from 'react'
import icon from  '../assets/static/add_icon.png'
import '../assets/styles/Menu.css'


const Menu = () => (
    <div className="Menu">
        <picture>
            <img src={icon} alt="add_icon"/>
        </picture>
    </div>
)

export default Menu