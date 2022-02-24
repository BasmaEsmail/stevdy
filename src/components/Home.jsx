import React from 'react';
import FifthSec from './FifthSec';
import FirstSec from './FirstSec';
import Footer from './Footer';
import FourSec from './FourSec';
import './Home.css'
import SecondSec from './SecondSec';
import SevSection from './SevSection';
import SixSection from './SixSection';
import ThirdSec from './ThirdSec';
import { Fade } from 'react-reveal';

const Home=()=>{
    return(
    <React.Fragment>
        
        <FirstSec/>
        <Fade bottom>
        <SecondSec/>
        <ThirdSec/>
        <FourSec/>
        <FifthSec/>
        <SixSection/>
        <SevSection/>
        </Fade>
        <Footer/>
    </React.Fragment>
    )
}
export default Home;