import React from 'react'
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        // <nav>
        //    <ul>
        //        <li><Link to="./">Home</Link></li>
        //        <li><Link to="./about">About</Link></li>
        //        <li><Link to="./login">Login</Link></li>
        //    </ul> 
        // </nav>

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">

                <Link to="./" className="navbar-brand" >UseContext</Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName="active" to="./" className="nav-link active" aria-current="page" >Home</NavLink>
                        <NavLink exact activeClassName="active" to="./about" className="nav-link" >About</NavLink>
                        <NavLink exact activeClassName="active" to="./login" className="nav-link" >Login</NavLink>     
                    </div>
                </div>
            </div>
        </nav>
    )
}
