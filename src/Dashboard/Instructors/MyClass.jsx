import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ClassCard from "./ClassCard";
import TitleSection from "../../components/TitleSection";

const MyClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await axiosSecure.get("/instructors");
    return res.data;
  });
  console.log(instructors);

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
