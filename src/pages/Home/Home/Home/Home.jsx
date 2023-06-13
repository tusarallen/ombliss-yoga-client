import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | Home</title>
      </Helmet>
      <Slider />
      <PopularInstructor />
      <ExtraSection />
    </div>
  );
};

export default Home;
