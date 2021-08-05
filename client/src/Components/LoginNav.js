import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Styles/LoginNav.css'


const LoginNav = (props) => {
    return (
    <nav className = "navlogin">
        <div className = "marginstart">
           MBYA staff
        </div>
        <NavLink className = "margin" 
        exact to='/elementary'>
            Elementary
        </NavLink>
        <NavLink className = "margin" 
        exact to='/highschool'>
            High School
        </NavLink>
        <NavLink className = "margin" 
        exact to='/speech'>
            Speech Schedules
        </NavLink>
        <NavLink className = "margin" 
        exact to='/ot'>
            OT Schedules
        </NavLink>
        <NavLink className = "margin" 
        exact to='/counseling'>
            Counseling Schedules
        </NavLink>
        
        <NavLink className = "margin"
          exact to="/"
          onClick={() => localStorage.clear()}
        >
          Sign Out
          </NavLink>
        </nav>
    )
}
export default LoginNav