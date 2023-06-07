import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../../../assets/images/yoga- (1).png";
import image2 from "../../../../assets/images/yoga- (2).png";
import image3 from "../../../../assets/images/yoga- (3).png";
import image4 from "../../../../assets/images/yoga- (4).png";
import image5 from "../../../../assets/images/yoga- (5).png";
import image6 from "../../../../assets/images/yoga- (6).png";

const Slider = () => {
  return (
    <div className="text-center w-11/12 mx-auto mt-5 mb-8">
      <Carousel>
        <div>
          <img className="rounded-lg" src={image6} />
        </div>
        <div>
          <img src={image5} />
        </div>
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
        <div>
          <img src={image2} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
