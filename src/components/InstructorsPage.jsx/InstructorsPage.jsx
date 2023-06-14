import { useQuery } from "@tanstack/react-query";
import TitleSection from "../TitleSection";
import CardInstructor from "./CardInstructor";
import { Helmet } from "react-helmet";

const InstructorsPage = () => {
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await fetch("https://om-bliss-yoga-server.vercel.app/instructorusers");
    return res.json();
  });
  console.log(instructors);

  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | Instructor</title>
      </Helmet>
      <TitleSection
        subHeading={"Our Popular"}
        heading={"Instructors"}
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
