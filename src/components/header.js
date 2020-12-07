import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="mb-5">
           <div className="container">
               <nav className="navbar navbar-expand-lg navbar-light">
                   <Link className="nav-logo" to="/">Dubai Cafe</Link>
                   <div className="ml-auto">
                       <Link className="nav-item" to="/">Home</Link>
                       <Link className="nav-item" to="/menu">Menu</Link>
                   </div>
               </nav>
           </div>
        </header>
    );
};

export default Header;