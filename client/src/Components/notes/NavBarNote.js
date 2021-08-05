import React from "react";

const NavBarNote = (props) => {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg primary-color ">
                <a className="navbar-brand">
                    <span className="material-icons mr-2">import_contacts</span>
                    <span>Teach World</span>
                </a>            
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/moran">back to student</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/note">New Note</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
  
export default NavBarNote;