import { useQuery } from "@tanstack/react-query";
import TitleSection from "../TitleSection";
import CardInstructor from "./CardInstructor";

const InstructorsPage = () => {
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await fetch("http://localhost:5000/instructorusers");
    return res.json();
  });
  console.log(instructors);

  return (
    <div>
      <TitleSection
        subHeading={"Familiar To"}
        heading={"Our Advicer"}
      ></TitleSection>
      <div className="mt-8 grid md:grid-cols-3 grid-cols-1 gap-8 w-11/12 mx-auto mb-8">
        {instructors.map((instructor) => (
          <CardInstructor key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
