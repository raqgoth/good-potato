import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Styles/LoginNav.css'

const KidNav = (props) => {
    return (
    <nav className = "navlogin">
        <div className = "marginstart">
           MBYA staff
        </div>
        <NavLink className = "margin" 
        exact to='/Kindergarten'>
            Back to Kindergarten
        </NavLink>
    </nav>
    )
}
export default KidNav