import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
     

            <div className="links">
            <Link to="/">Home</Link>
                <Link to="/sis.materdeicollege.com/api/venues/">Venues</Link>
            </div>
    
      </nav>
    );
}
 
export default Navbar;