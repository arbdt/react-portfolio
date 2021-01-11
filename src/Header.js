// imports
import React from "react";
import {Link, useLocation} from "react-router-dom";

// component definition
function Header(){

    const location = useLocation(); // get location from router

    return (
        <header>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
            <Link className="navbar-brand" to="/index">Daniel Arbon's Portfolio</Link> {/* navbar heading */}
            
            {/* collapsed navbar button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent"> {/* expanded navbar content */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className={location.pathname === "/index" ? "nav-link-active" : "nav-link" } to="/index">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={location.pathname === "/portfolio" ? "nav-link-active" : "nav-link" } to="/portfolio">My Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={location.pathname === "/contact" ? "nav-link-active" : "nav-link" } to="/contact">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
    );
}

// export component
export default Header;