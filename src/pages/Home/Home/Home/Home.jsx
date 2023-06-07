import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import ExtraSection from "../ExtraSection/ExtraSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | Home</title>
      </Helmet>
      <Slider />
      <ExtraSection />
    </div>
  );
};

export default Home;
