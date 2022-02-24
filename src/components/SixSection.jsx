import React from "react";
import { Link } from "react-router-dom";
const SixSection = () => {
    return (
        <React.Fragment>
        <div className="six">
            <div className="main-row">
                <div className="si-column">
                    <h1>Acceleration Process to Grow Your Business</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Stet clita 
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                    </p>
                    <Link to="/about"><button  className="about">About us</button></Link>
                </div>
                <div className="si-column">
                    <ul className="markList">
                        <li>
                        <div className="market">
                            <h2>Market Research</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna 
                                aliquyam erat, sed diam voluptua.
                            </p>
                        </div>
                        </li>
                        <li>
                        <div className="market">
                            <h2>Market Research</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna 
                                aliquyam erat, sed diam voluptua.
                            </p>
                        </div>
                        </li>
                        <li>
                        <div className="market">
                        <h2>Market Research</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua.
                        </p>
                        </div>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </div>
        </React.Fragment>
      );
}
 
export default SixSection;