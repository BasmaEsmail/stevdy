import React from "react";

const FirstSec = () => {
    return ( 
        <React.Fragment>
            <div className='main'>
            <div className="main-row">
                <div className="fir-column ">
                    <div className="toptext">
                    <h5 >Advanced Platform</h5>
                    <h1>Take your team </h1>
                    <h1> to the next level</h1>
                    <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod </h6>
                    <button className="firstabout">About us</button>
                    </div>
                   
                </div>
                <div className="fir-column">
                    <img src={require("../img/report.png")} alt="preview" className="repImg"/>
                </div>
            </div>

            <div>
                    <ul className="logos">
                        <li><img src={require('../img/client-1.png')} alt="client"/></li>
                        <li><img src={require('../img/client-2.png')} alt="client"/></li>
                        <li><img src={require('../img/client-3.png')} alt="client"/></li>
                        <li><img src={require('../img/client-4.png')} alt="client"/></li>
                        <li><img src={require('../img/client-5.png')} alt="client"/></li>
                    </ul>
            </div>
            
        </div>
        </React.Fragment>

     );
}
 
export default FirstSec;