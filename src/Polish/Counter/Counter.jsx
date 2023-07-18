import { useEffect, useState } from "react";
import {
  BsBusFrontFill,
  BsFillHeartFill,
  BsGraphUpArrow,
  BsPassFill,
} from "react-icons/bs";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const elements = document.querySelectorAll(".count-animation");
    const options = {
      threshold: 0.5, // Adjust this value based on your desired scroll position
      rootMargin: "0px",
    };

    const handleScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCounters((prevCounters) =>
            prevCounters.map((counter, index) =>
              index === parseInt(entry.target.id) ? counter + 1 : counter
            )
          );
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, options);
    elements.forEach((element, index) => {
      element.id = index;
      observer.observe(element);
    });

    // Start counting up immediately
    setCounters([400, 200, 300, 100]);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#E63F75] md:p-24">
      <div>
        <ScrollTrigger>
          <div className="flex justify-center items-center gap-5">
            <div>
              <BsGraphUpArrow style={{ fontSize: "50px" }} />
            </div>
            <div className="text-7xl font-extrabold text-white">
              <CountUp
                end={counters[0]}
                duration={2.5}
                className="count-animation"
              />
            </div>
          </div>
        </ScrollTrigger>
        <h2 className="text-center text-2xl font-bold mt-6">Maintain Growth</h2>
      </div>
      <div>
        <ScrollTrigger>
          <div className="flex justify-center items-center gap-5">
            <div>
              <BsFillHeartFill style={{ fontSize: "50px" }} />
            </div>
            <div className="text-7xl font-extrabold text-white">
              <CountUp
                end={counters[1]}
                duration={2.5}
                className="count-animation"
              />
            </div>
          </div>
        </ScrollTrigger>
        <h2 className="text-center text-2xl font-bold mt-6">Strong Immunity</h2>
      </div>
      <div>
        <ScrollTrigger>
          <div className="flex justify-center items-center gap-5">
            <div>
              <BsPassFill style={{ fontSize: "50px" }} />
            </div>
            <div className="text-7xl font-extrabold text-white">
              <CountUp
                end={counters[2]}
                duration={2.5}
                className="count-animation"
              />
            </div>
          </div>
        </ScrollTrigger>
        <h2 className="text-center text-2xl font-bold mt-6">Daily Routine</h2>
      </div>
      <div>
        <ScrollTrigger>
          <div className="flex justify-center items-center gap-5">
            <div>
              <BsBusFrontFill style={{ fontSize: "50px" }} />
            </div>
            <div className="text-7xl font-extrabold text-white">
              <CountUp
                end={counters[3]}
                duration={2.5}
                className="count-animation"
              />
            </div>
          </div>
        </ScrollTrigger>
        <h2 className="text-center text-2xl font-bold mt-6">School Bus</h2>
      </div>
    </div>
  );
};

export default Counter;
