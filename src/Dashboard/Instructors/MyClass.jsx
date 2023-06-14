// import { useQuery } from "@tanstack/react-query";
import ClassCard from "./ClassCard";
import TitleSection from "../../components/TitleSection";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const MyClass = () => {
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await fetch("https://om-bliss-yoga-server.vercel.app/instructors");
    return res.json();
  });

  return (
    <>
      <Helmet>
        <title>ŌmBliss Yoĝa | My Class</title>
      </Helmet>
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
