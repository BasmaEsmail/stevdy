import React from "react";
import Slider from './Slider';

const FourSec = () => {
    return ( 
        <React.Fragment>
            <div className="fourth">
                <h4>Advanced Customer Service Platform</h4>
                <h1>Platform Overview</h1>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est 
                Lorem ipsum dolor sit amet
                </p>
                {/* <img src={require("../img/report.png")} alt="report"/>     */}
                <Slider/>

        </div>

            
        </React.Fragment>
     );
}
 
export default FourSec;