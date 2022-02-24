import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider=()=>{
    return(
        <Carousel autoPlay>
                <div>
                    <img src={require("../img/report.png")} alt="slider-img"/>
                </div>
                <div>
                    <img src={require("../img/report.png")} alt="slider-img"/>
                </div>
                <div>
                    <img src={require("../img/report.png")} alt="slider-img"/>
                </div>
        </Carousel>

    )
}
export default Slider;