import { useQuery } from "@tanstack/react-query";
import TitleSection from "../TitleSection";
import CardClass from "./CardClass";
import useAdmin from "../../hooks/useAdmin";
import useInstructors from "../../hooks/useInstructors";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ClassesPage = () => {
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });
  console.log(classes);

  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructors();
  const [axiosSecure] = useAxiosSecure();

  return (
    <div>
      <TitleSection
        subHeading={"Hi Students?"}
        heading={"Enrolled Classes Here"}
      ></TitleSection>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-12 w-11/12 mx-auto mb-8 text-left">
        {classes.map((selectClass) => (
          <CardClass
            key={selectClass._id}
            selectClass={selectClass}
            isAdmin={isAdmin}
            isInstructor={isInstructor}
            axiosSecure={axiosSecure}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
