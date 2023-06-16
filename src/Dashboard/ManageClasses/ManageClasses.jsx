import { useQuery } from "@tanstack/react-query";
import TitleSection from "../../components/TitleSection";
import ClassManageCard from "./ClassManageCard";
import { Helmet } from "react-helmet";

const ManageClasses = () => {
  const { data: instructors = [], refetch } = useQuery(
    ["instructors"],
    async () => {
      const res = await fetch("https://om-bliss-yoga-server.vercel.app/instructors");
      return res.json();
    }
  );

  return (
    <>
      <Helmet>
        <title>ŌmBliss Yoĝa | Manage Classes</title>
      </Helmet>
      <TitleSection
        subHeading={"Hi Admin?"}
        heading={"Manage Classes"}
      ></TitleSection>
      <div className="mt-8">
        {instructors.map((instructor) => (
          <ClassManageCard
            key={instructor._id}
            instructor={instructor}
            refetch={refetch}
          />
        ))}
      </div>
    </>
  );
};

export default ManageClasses;
