import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import YogaZone from "../../../../Polish/YogaZone/YogaZone";
import Counter from "../../../../Polish/Counter/Counter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | Home</title>
      </Helmet>
      <Slider />
      <YogaZone />
      <Counter />
      <PopularInstructor />
      <ExtraSection />
    </div>
  );
};

export default Home;
