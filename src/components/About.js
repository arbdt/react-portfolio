// imports
import React from "react";
import {Link} from "react-router-dom";
import resumePDF from "../assets/arbdt-resume-bcs-version.pdf";
import bioImage from "../assets/images/bio-image.jpg";

// component definition
function About(){
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card mt-5"> {/* main content card */}
                    <div className="card-body">
                        <h1>About Me</h1>
                        <hr/>
                        <img src={bioImage} className="float-left mr-3" alt="The owner of this page."/> {/* bio image */}
                        {/* biographical text here */}
                        <p>Hello there!</p>
                        <p>I am a web developer with experience creating both front-end and back-end.
                             I have a certificate in Full Stack Web Development from Adelaide University,
                              and a Bachelor of Information Technology from the University of South Australia.
                              I have experience in generating HTML, CSS, and JavaScript. I am practiced
                               in utilising AJAX-based API calls with JQuery, creating web-based and command-line applications using Node.JS and Express.JS,
                                performing database operations with MySQL and Sequelize or MongoDB and Mongoose, with utilising Handlebars for templates, and using Bootstrap for layouts.
                               I also have experience with using Git and GitHub for version control, and with hosting websites on GitHub Pages or Heroku.</p>
                        <p>Welcome to my online portfolio. Head on over to the <Link to="/contact">Contact Me</Link> page to view a list of my work.</p>
                        <hr/>
                        <section className="centred-links"> {/* external links */}
                            <p><strong>Other Links:</strong></p>
                            <p><i className="fab fa-github"></i> <a href="https://www.github.com/arbdt">Git Hub</a> &emsp;
                            <i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/daniel-arbon-9bbb2419a/">LinkedIn</a> &emsp;
                            <i className="fas fa-file-pdf"></i> <a href={resumePDF}> My CV</a></p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export component
export default About;