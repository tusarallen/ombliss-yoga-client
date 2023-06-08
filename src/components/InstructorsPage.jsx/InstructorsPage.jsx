import { useEffect, useState } from "react";
import CardInstructor from "./CardInstructor";

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  console.log(instructors);

  return (
    <div>
      <h2 className="font-bold text-3xl text-center text-red-500 my-8">
        Our Instructors
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 w-11/12 mx-auto">
        {instructors.map((instructor) => (
          <CardInstructor key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
