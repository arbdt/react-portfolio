// imports
import React from "react";
import {showcaseItems, otherItems} from "./utils/PortfolioItems";

// define component
function Portfolio(){
    return (
        <div className="row">
                <div className="col-sm-12">
                    <div className= "card mt-5"> {/* content card */}
                        <div className="card-body mr-md-7">
                            <h1>Portfolio</h1>
                            <hr/>
                            <h3>Major Projects</h3> {/* showcase items in this section */}
                            {showcaseItems !== undefined? showcaseItems.map((item) => 
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="project-card card mb-4"> 
                                            <img className="card-img-top" src={item.image} alt={"Preview of " + item.title}/>
                                            <div className="card-body">
                                                <h4 className="card-title">{item.title}</h4>
                                                <p className="card-text">{item.text}</p>
                                                <p className="card-text portfolio-tech">{item.tech}</p>
                                                {item.deployedUrl !== undefined? <a href={item.deployedUrl} className="btn btn-cust-blue">Visit Site</a>: <></>}
                                                &emsp;
                                                {item.repoUrl !== undefined? <a href={item.repoUrl} className="btn btn-cust-gold">Visit GitHub</a>: <></>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ): <></>}

                            <h3>Other Work</h3>
                            <div className="row row-cols-3">
                                {otherItems !== undefined? otherItems.map((item) => 
                                    <div className="col">
                                        <div className="project-card card mb-4"> 
                                            <img className="card-img-top" src={item.image} alt={"Preview of " + item.title}/>
                                            <div className="card-body">
                                                <h4 className="card-title">{item.title}</h4>
                                                <p className="card-text">{item.text}</p>
                                                <p className="card-text portfolio-tech">{item.tech}</p>
                                                {item.deployedUrl !== undefined? <a href={item.deployedUrl} className="btn btn-cust-blue">Visit Site</a>: <></>}
                                                &emsp;
                                                {item.repoUrl !== undefined? <a href={item.repoUrl} className="btn btn-cust-gold">Visit GitHub</a>: <></>}
                                            </div>
                                        </div>
                                    </div>
                                ): <></>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

// export component
export default Portfolio;