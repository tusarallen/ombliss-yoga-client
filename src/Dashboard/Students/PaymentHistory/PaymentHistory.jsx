import { useQuery } from "@tanstack/react-query";
import TitleSection from "../../../components/TitleSection";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: historys = [] } = useQuery(["historys"], async () => {
    const res = await axiosSecure.get(
      `https://om-bliss-yoga-server.vercel.app/getpayments?email=${user?.email}`
    );
    return res.data;
  });
  console.log(historys);

  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | History</title>
      </Helmet>
      <TitleSection
        subHeading={"Your Payment?"}
        heading={"History Here"}
      ></TitleSection>
      <div className="overflow-x-auto mt-8">
        <table className="table">
          <thead>
            <tr>
              <th className="font-bold text-2xl text-black">#</th>
              <th className="font-bold text-2xl text-black">Image</th>
              <th className="font-bold text-2xl text-black">
                Customer <br /> Name
              </th>
              <th className="font-bold text-2xl text-black">
                Customer <br /> Email
              </th>
              <th className="font-bold text-2xl text-black ml-12">
                TransactionId
              </th>
              <th className="font-bold text-2xl text-black ml-12">Time</th>
            </tr>
          </thead>
          <tbody>
            {historys.map((history, index) => (
              <tr key={history._id}>
                <td className="font-bold text-xl">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={history.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="font-bold text-xl">{history.name}</td>
                <td className="font-bold text-xl">{history.email}</td>
                <td className="font-bold text-xl">{history.transactionId}</td>
                <td className="font-bold text-xl">{history.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
