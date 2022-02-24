import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ReviewSlider=()=>{
    return(
        <Carousel autoPlay>
                <div>
                    <img src={require("../img/review2.png")} alt="review" />
                </div>
                <div>
                    <img src={require("../img/review2.png")} alt="review" />
                </div>
                <div>
                    <img src={require("../img/review2.png")} alt="review" />
                </div>
        </Carousel>

    )
}
export default ReviewSlider;