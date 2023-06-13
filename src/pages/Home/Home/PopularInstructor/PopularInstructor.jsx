import { useQuery } from "@tanstack/react-query";
import PopularCardInstructors from "./PopularCardInstructors";
import TitleSection from "../../../../components/TitleSection";

const PopularInstructor = () => {
  const { data: popularInstructors = [] } = useQuery(
    ["popularInstructors"],
    async () => {
      const res = await fetch("http://localhost:5000/popularinstructors");
      return res.json();
    }
  );
  console.log(popularInstructors);

  return (
    <div>
      <TitleSection
        subHeading={"Our Popular"}
        heading={"Instructors"}
      ></TitleSection>
      <div>
        <div className="mt-8 grid md:grid-cols-3 grid-cols-1 gap-8 w-11/12 mx-auto mb-8">
          {popularInstructors.map((instructors) => (
            <PopularCardInstructors
              key={instructors._id}
              instructors={instructors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
