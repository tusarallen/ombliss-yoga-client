import { Link } from "react-router-dom";

const YogaZone = () => {
  return (
    <div className="md:mt-20 bg-cover bg-center md:p-8" style={{ backgroundImage: `url("https://i.ibb.co/ZNjcH5b/horizontal-mountain-landscape-with-trees-panoramic-view-of-ridges-and-forest-in-fog-illustration-vec.jpg")` }}>
      <div className="flex flex-col-reverse md:flex-row gap-5 md:w-11/12 mx-auto">
        <div className="md:w-1/2 md:mt-28">
          <h2 className="md:text-5xl font-bold md:mb-6">
            <span className="font-serif">Welcome to ŌmBliss</span>
            <br />
            <span className="font-serif text-[#E63F75]">
              Your Spiritual Guide
            </span>
          </h2>
          <p className="text-black font-bold font-sans">
            Yogazone is a holistic wellness center that offers a serene and
            nurturing space for individuals to explore and deepen their yoga
            practice. Located in a peaceful setting surrounded by nature,
            Yogazone aims to create an atmosphere where people can reconnect
            with their bodies, minds, and spirits.At Yogazone, experienced and
            passionate yoga instructors guide students of all levels through a
            variety of yoga classes, from gentle and restorative practices to
            more dynamic and challenging styles.
            <br />
            <br />
            The classes are designed to cater to the diverse needs and goals of
            each individual, promoting flexibility, strength, balance, and
            overall well-being...
          </p>
          <Link to="/">
            <button className="btn btn-success hover:btn-warning text-white hover:text-black md:mt-6">
              Read More
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img src="https://i.ibb.co/zHPgSd8/yoga1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default YogaZone;
