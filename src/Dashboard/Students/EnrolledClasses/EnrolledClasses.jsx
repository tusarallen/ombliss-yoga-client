import { useQuery } from "@tanstack/react-query";
import TitleSection from "../../../components/TitleSection";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet";

const EnrolledClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get(
      `http://localhost:5000/getpayments?email=${user?.email}`
    );
    return res.data;
  });
  console.log(classes);

  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | Enroll Class</title>
      </Helmet>
      <TitleSection
        subHeading={"Your?"}
        heading={"Enrolle Classes"}
      ></TitleSection>
      <div className="overflow-x-auto mt-8">
        <table className="table">
          <thead>
            <tr>
              <th className="font-bold text-2xl text-black">#</th>
              <th className="font-bold text-2xl text-black">Image</th>
              <th className="font-bold text-2xl text-black">Class Name</th>
              <th className="font-bold text-2xl text-black">Instructor Name</th>
              <th className="font-bold text-2xl text-black ml-12">Price</th>
              <th className="font-bold text-2xl text-black ml-12">Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <tr key={cls._id}>
                <td className="font-bold text-xl">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={cls.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="font-bold text-xl">{cls.className}</td>
                <td className="font-bold text-xl">{cls.name}</td>
                <td className="font-bold text-xl">{cls.price}</td>
                <td className="font-bold flex items-center text-xl bg-[#42ba96] p-2 ml-4 mt-3 text-center rounded-md">
                  Paid
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
