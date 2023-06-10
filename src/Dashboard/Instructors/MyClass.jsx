// import { useQuery } from "@tanstack/react-query";
import ClassCard from "./ClassCard";
import TitleSection from "../../components/TitleSection";
import { useQuery } from "@tanstack/react-query";

const MyClass = () => {
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await fetch("http://localhost:5000/instructors");
    return res.json();
  });

  return (
    <>
      <TitleSection
        subHeading={"Add More?"}
        heading={"Your Classes"}
      ></TitleSection>
      <div className="mt-8">
        {instructors.map((instructor) => (
          <ClassCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </>
  );
};

export default MyClass;
