import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularClass from "../PopularClass/PopularClass";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | Home</title>
      </Helmet>
      <Slider />
      <PopularInstructor />
      <PopularClass />
      <ExtraSection />
    </div>
  );
};

export default Home;
