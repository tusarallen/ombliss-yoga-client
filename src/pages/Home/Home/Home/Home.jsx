import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | Home</title>
      </Helmet>
      <Slider />
    </div>
  );
};

export default Home;
