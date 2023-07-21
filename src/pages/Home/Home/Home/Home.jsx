import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import YogaZone from "../../../../Polish/YogaZone/YogaZone";
import Counter from "../../../../Polish/Counter/Counter";
import About from "../../../../Polish/About/About";
import FAQs from "../../../../Polish/FAQs/FAQs";
import Audience from "../../../../Polish/Audience/Audience";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | Home</title>
      </Helmet>
      <Slider />
      <YogaZone />
      <Counter />
      <About />
      <PopularInstructor />
      <Audience />
      <ExtraSection />
      <FAQs />
    </div>
  );
};

export default Home;
