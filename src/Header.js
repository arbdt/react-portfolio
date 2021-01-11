// imports
import React from "react";

// component definition
function Header(){
    return (
        <header>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
            <a className="navbar-brand" href="index.html">Daniel Arbon's Portfolio</a> {/* navbar heading */}
            {/* collapsed navbar button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent"> {/* expanded navbar content */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="portfolio.html">My Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="contact.html">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
    );
}

// export component
export default Header;