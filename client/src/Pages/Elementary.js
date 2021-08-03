import React from 'react'
import LoginNav from '../Components/LoginNav'
import {NavLink} from 'react-router-dom'
import '../Styles/LoginNav.css'

const Elementary = () => (
    <div>
      <LoginNav />
            <h3>This is elementary</h3>
        <nav>
        <NavLink className = "margin" 
        exact to='/Kindergarten'>
            Kindergarten
        </NavLink>
        <NavLink className = "margin" 
        exact to='/first-grade'>
            First Grade
        </NavLink>
        <NavLink className = "margin" 
        exact to='/second-grade'>
            Second Grade
        </NavLink>
        <NavLink className = "margin" 
        exact to='/third-grade'>
            Third Grade
        </NavLink>
        </nav>

        </div>

    )
export default Elementary