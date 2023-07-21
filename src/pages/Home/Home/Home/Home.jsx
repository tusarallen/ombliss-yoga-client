import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import YogaZone from "../../../../Polish/YogaZone/YogaZone";
import Counter from "../../../../Polish/Counter/Counter";
import About from "../../../../Polish/About/About";
import FAQs from "../../../../Polish/FAQs/FAQs";
import Audience from "../../../../Polish/Audience/Audience";
import Hyper from "../../../../Polish/Hyper/Hyper";
import Newsletter from "../../../../Polish/Newsletter/Newsletter";
import Pricing from "../../../../Polish/Pricing/Pricing";
import Testimonials from "../../../../Polish/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | Home</title>
      </Helmet>
      <Slider />
      <YogaZone />
      <Pricing />
      <Counter />
      <About />
      <PopularInstructor />
      <Audience />
      <ExtraSection />
      <Hyper />
      <Testimonials />
      <FAQs />
      <Newsletter />
    </div>
  );
};

export default Home;
