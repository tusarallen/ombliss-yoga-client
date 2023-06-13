/* eslint-disable react/prop-types */
import { useSpring, animated } from "react-spring";

const PopularCardInstructors = ({ instructors }) => {
  const { photo, name, email, role } = instructors;

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  return (
    <animated.div
      style={cardAnimation}
      className="card card-compact w-full sm:w-96 bg-base-200 shadow-2xl"
    >
      <figure>
        <img className="h-[300px] object-cover" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body mt-3">
        <h2 className="font-extrabold mt-2 text-success text-2xl">{role}</h2>
        <h2 className="font-bold mt-2 text-xl">Name: {name}</h2>
        <p className="font-bold mt-2 text-lg">Contact: {email}</p>
      </div>
    </animated.div>
  );
};

export default PopularCardInstructors;
