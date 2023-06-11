import { useQuery } from "@tanstack/react-query";
import TitleSection from "../TitleSection";
import CardClass from "./CardClass";

const ClassesPage = () => {
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });
  console.log(classes);

  return (
    <div>
      <TitleSection
        subHeading={"Hi Students?"}
        heading={"Enrolled Classes Here"}
      ></TitleSection>
      <div className="w-3/5 mx-auto mb-8">
        {
          classes.map(selectClass => <CardClass key={selectClass._id} selectClass={selectClass}/>)
        }
      </div>
    </div>
  );
};

export default ClassesPage;
