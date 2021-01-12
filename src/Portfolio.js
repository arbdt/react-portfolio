// imports
import React from "react";
import {showcaseItems, otherItems} from "./utils/PortfolioItems";

// define component
function Portfolio(){
    return (
        <div class="row">
                <div class="col-sm-12">
                    <div class= "card mt-5"> {/* content card */}
                        <div class="card-body mr-md-7">
                            <h1>Portfolio</h1>
                            <hr/>
                            <h3>Major Projects</h3> {/* showcase items in this section */}
                            {showcaseItems !== undefined? showcaseItems.map((item) => 
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="project-card card mb-4"> 
                                            <img class="card-img-top" src={item.image} alt={"Preview of" + item.title}/>
                                            <div class="card-body">
                                                <h4 class="card-title">{item.title}</h4>
                                                <p class="card-text">{item.text}</p>
                                                <p class="card-text portfolio-tech">{item.tech}</p>
                                                {item.deployedUrl !== undefined? <a href={item.deployedUrl} class="btn btn-cust-blue">Visit Site</a>: <></>}
                                                &emsp;
                                                {item.repoUrl !== undefined? <a href={item.repoUrl} class="btn btn-cust-gold">Visit GitHub</a>: <></>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ): <></>}

                            <h3>Other Work</h3>
 
                        </div>
                    </div>
                </div>
            </div>
    );
}

// export component
export default Portfolio;