import React from 'react'
import LoginNav from '../Components/LoginNav'
import {NavLink} from 'react-router-dom'

const Kindergarten= () => (
    <div>
      <LoginNav />
            <h3>This is Kindergarten</h3>
            <br></br>
           <NavLink
            exact to = '/moran'>
            Moran Sherabi
        </NavLink>

                
                
           


        </div>

    )
export default Kindergarten