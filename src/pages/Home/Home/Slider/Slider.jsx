import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="text-center w-11/12 mx-auto mt-5 mb-8">
      <Carousel>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/23D5JPZ/yoga-6.png"
          />
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/vVKSgtm/yoga-5.png"
          />
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/4sbhMb8/yoga-1.png"
          />
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/tLGzC7w/yoga-3.png"
          />
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/mJyMxQn/yoga-4.png"
          />
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/rxygzJc/yoga-2.png"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
