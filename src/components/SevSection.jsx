import React from "react";
import CountUp  from "react-countup";
import { Link } from "react-router-dom";
import ReviewSlider from "./ReviewSlider";
const SevSection = () => {
    return (  
        <React.Fragment>
        <div className="sev">
            <h1>Don't Just Take our Word for it!</h1>
            <div className="num">
                <div className="numcol">
                <h1 className="countup">
                <CountUp end={570}/>
                </h1>
                <h6>Download</h6>
                </div>

                <div className="numcol">
                <h1 className="countup">
                <CountUp end={570}/>
                </h1>
                <h6>Active User</h6>
                </div>

                <div className="numcol">                
                <h1 className="countup">
                <CountUp end={570}/>
                </h1>
                <h6>Positive Feedback</h6>
                </div>

                <div className="numcol">
                <h1 className="countup">
                <CountUp end={570}/>
                </h1>
                <h6> + rating</h6>
                </div>
            </div>

            <div className="main-row">
                <div className="sev-column review">
                    <ReviewSlider />
                </div>
                <div className="sev-column">
                    <div className="sevtext">
                        <h1>Grow Your Business and Join Our Happy Users</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                        </p>
                        <Link to="/about"><button  className="about">About us</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}
 
export default SevSection;