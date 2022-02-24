import React from "react";
import { Link } from "react-router-dom";
const SecondSec = () => {
    return ( 
    <React.Fragment>
        <div className='second'>
           <div className="main-row">
                {/*  left Column  */}
               <div className="sec-column">
                   <div className="sectext">
                        <h1>The best business solution for you</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                        </p>
                        <Link to="#" className='sec-link'>Learn About Our Success </Link>
                    </div>
               </div>

               {/*  Right Column  */}
               <div className="sec-column">
                        <div className="main-row">
                            <div className='sec-column'>
                                <img src={require("../img/icon-1.png")} alt="" />
                                <h3>Scale Your Activity</h3>
                                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore</p>
                                </div>
                                <div className='sec-column'>
                                <img src={require("../img/icon-2.png")} alt="" />
                                <h3>Bootcamps</h3>
                                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore</p>
                                </div>
                        </div>

                        <div className="main-row">
                            <div className='sec-column'>
                                <img src={require("../img/icon-3.png")} alt="" />
                                <h3>High Quality</h3>
                                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore</p>
                                </div>
                                <div className='sec-column'>
                                <img src={require("../img/icon-4.png")} alt="" />
                                <h3>Get Certification</h3>
                                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore</p>
                                </div>
                        </div>
                    
               </div>
           </div>
        </div>

    </React.Fragment> );
}
 
export default SecondSec;