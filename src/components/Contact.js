// imports
import React from "react";

// component definition
function Contact(){
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card mt-5">
                    <div className="card-body mr-md-5">
                        {/* page header */}
                        <h1>Contact</h1>
                        <hr/>                      
                        <p>This page does not currently work at the moment, but once it does, you can fill in the form below to get in touch.
                             In the mean time, you may contact me by email <i className="fas fa-at"></i>&nbsp;<a href="mailto:danieltarbon@live.com.au">danieltarbon@live.com.au</a>
                             &ensp;or give me a call <i className="fas fa-phone-alt"></i>&nbsp;<a href="tel:+61422735715">+61 422 735 715</a>.</p>   
                        {/* contact form */}
                        <form>
                            <div className="form-group"> {/* name */}
                                <label htmlFor="inputName">Name</label>
                                <input type="text" className="form-control" id="inputName" placeholder="Name"/>
                            </div>
                            <div className="form-group"> {/* email */}
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                            </div>
                            <div className="form-group"> {/* message body */}
                                <label htmlFor="inputMessage">Message</label>
                                <textarea className="form-control" id="inputMessage" rows="3" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-cust-blue">Submit</button> {/* send button */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export component
export default Contact;