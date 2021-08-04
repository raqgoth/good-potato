import React from 'react'
import LoginNav from '../Components/LoginNav'
import '../Styles/Moran.css'
import {NavLink} from 'react-router-dom'
import KidNav from '../Components/KidNav'

const Moran = () => (
    <div>
      <LoginNav />
      <KidNav />
            <h3>This is Moran</h3>
            <br></br>
            <NavLink
            exact to = '/moranparentlog'>
            Parent Log
        </NavLink>

            <div className = "team">
            <div class="card">
            <div class="card-body">

            <h5 class="card-title">Moran Sherabi's team</h5>
            <span></span>
            <p>NYC ID number: 223-33-44</p>
            <p>Speech: Morah Sarah Gold 
           <br></br>718-327-7728
           <br></br>2X30
           </p>
            <span></span>
            <p>OT: Morah  Stacey Reiz 
            <br></br>718-444-5667
            <br></br>2x30
            </p>
            <p>Counseling: Morah Martha Shwartz
           <br></br>718-234-5566
           <br></br>
           1X30 group
           </p>
            <p>Last IEP meeting: 7/6/2021 </p>
            <p>  Next IEP meeting: not scheduled
            </p>
                </div>
                </div>
        </div>
        <br></br>
        <span></span>
        <div className = "space">
        <table class="table table-bordered">
        
    <thead>
      <tr>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td>9:30-10:00 am
            Speech
        </td>
        <td>
        </td>
        <td></td>
        <td>10:00-10:30 am
            OT
        </td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>12:00-12:30pm 
            Speech
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>3:00-3:30 Counseling</td>
        <td></td>
        <td></td>
        <td>9:15 am-9:45 am OT</td>
      </tr>
    </tbody>
    
  </table>
  </div>
  
        </div>
    )


export default Moran