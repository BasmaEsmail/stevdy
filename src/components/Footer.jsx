import React from "react";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="main-row foot">
                <div className="footCol">
                <h4>Study</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus eget diam at mi sollicitudin</p>
                </div>

                <div className="footCol">
                <h4>Nos services</h4>
                <ul className="services">
                    <li>Avis clients</li>
                    <li>Avis clients</li>
                    <li>Avis clients</li>
                    <li>Avis clients</li>

                </ul>
                </div>

                <div className="footCol">
                    <h4>Sign up for Special Offers!</h4>
                    <div className="sub">
                    <input className="sub-box" placeholder="Mail" type="text"/><button className="sub-button"> Subscribe</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
      );
}
 
export default Footer;