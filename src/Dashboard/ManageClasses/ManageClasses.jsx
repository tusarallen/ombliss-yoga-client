import { useQuery } from "@tanstack/react-query";
import TitleSection from "../../components/TitleSection";
import ClassManageCard from "./ClassManageCard";

const ManageClasses = () => {
    const { data: instructors = [] , refetch } = useQuery(["instructors"], async () => {
        const res = await fetch("http://localhost:5000/instructors");
        return res.json();
      });
    console.log(instructors);

  return (
    <>
      <TitleSection
        subHeading={"Hi Admin?"}
        heading={"Manage Classes"}
      ></TitleSection>
      <div className="mt-8">
        {instructors.map((instructor) => (
          <ClassManageCard key={instructor._id} instructor={instructor} refetch={refetch} />
        ))}
      </div>
    </>
  );
};

export default ManageClasses;
