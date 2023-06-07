import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ExtraSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <h2 className="text-center font-extrabold text-3xl my-5">
        Some Of Our Trainers
      </h2>
      <div
        className="grid md:grid-cols-3 grid-cols-1 w-11/12 mx-auto gap-4 mb-12"
        data-aos="fade-up" // Animation for the first div
      >
        <div>
          <img
            className="rounded-md"
            src="https://i.ibb.co/prfJPmv/1.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-down" // Animation for the second div
        >
          <img
            className="rounded-md"
            src="https://i.ibb.co/jb0D6BT/2.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-right" // Animation for the third div
        >
          <img
            className="rounded-md"
            src="https://i.ibb.co/bH45Fp3/3.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-left" // Animation for the fourth div
        >
          <img
            className="rounded-md"
            src="https://i.ibb.co/NxrNtnH/4.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-md"
            src="https://i.ibb.co/WxybWxN/5.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-md"
            src="https://i.ibb.co/LCLByNm/6.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ExtraSection;
