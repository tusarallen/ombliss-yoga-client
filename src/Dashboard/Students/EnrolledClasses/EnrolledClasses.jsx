import { useQuery } from "@tanstack/react-query";
import TitleSection from "../../../components/TitleSection";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const EnrolledClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery(["users"], async () => {
    const res = await axiosSecure.get(
      `http://localhost:5000/getpayments?email=${user?.email}`
    );
    return res.data;
  });
console.log(classes)
  return (
    <div>
      <TitleSection
        subHeading={"Your?"}
        heading={"Enrolle Classes"}
      ></TitleSection>
    </div>
  );
};

export default EnrolledClasses;
