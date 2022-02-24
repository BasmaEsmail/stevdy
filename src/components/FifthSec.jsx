import React from 'react';
import { Link } from 'react-router-dom';
const FifthSec = () => {
    return ( 
        <React.Fragment>
            <div className="fifth">
            <div className="main-row">
                <div className="fir-column ">
                    <div className="fiftext">
                    <h1>Best Platform for the Technological Era </h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                    </p>
                    <Link to="#" className='sec-link'>Learn About Our Success </Link>
                    </div>
                </div>
                <div className="fir-column">
                    <img src={require("../img/report.png")} alt="preview" className="fifImg"/>
                </div>
            </div>
            </div>

        </React.Fragment>
     );
}
 
export default FifthSec;