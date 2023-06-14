/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import TitleSection from "../../../../components/TitleSection";
import PopularCard from "./PopularCard";

const PopularClass = () => {
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await fetch("https://om-bliss-yoga-server.vercel.app/classes/homepage");
    return res.json();
  });
  console.log(classes);

  return (
    <div>
      <TitleSection
        subHeading={"Our Popular"}
        heading={"Classes"}
      ></TitleSection>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-12 w-11/12 mx-auto mb-8 text-left">
        {classes.map((selectClass) => (
          <PopularCard key={selectClass._id} selectClass={selectClass} />
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
