import React from "react";
import { Link } from "react-router-dom";
const ThirdSec = () => {
    return ( 
    <React.Fragment>
        <div className='third'>
            <div className="main-row">
                <div className="th-column-img ">
                    <img src={require("../img/report.png")} alt="preview" className="thirdImg"/>     
                </div>

                <div className="th-column">
                    <div className="thirdtext">
                        <h1>Best Platform for the Technological Era </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                             invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
                             accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea
                            takimata sanctus est Lorem ipsum dolor sit amet
                        </p>
                        <Link to="#" className='sec-link'>Learn About Our Success </Link>
                    </div>
                </div>
            </div>
        </div>

    </React.Fragment> );
}
 
export default ThirdSec;