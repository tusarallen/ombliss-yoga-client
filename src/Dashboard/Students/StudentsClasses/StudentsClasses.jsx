import { useQuery } from "@tanstack/react-query";
import TitleSection from "../../../components/TitleSection";
import useAuth from "../../../hooks/useAuth";
import { FaAmazonPay, FaTrashAlt } from "react-icons/fa";

const StudentsClasses = () => {
  const { user } = useAuth();
  const { data: studentclasses = [] } = useQuery(
    ["studentclasses"],
    async () => {
      const res = await fetch(
        `http://localhost:5000/studentclasses?email=${user?.email}`
      );
      return res.json();
    }
  );
  console.log(studentclasses);

  return (
    <div>
      <TitleSection
        subHeading={"Hi Students?"}
        heading={"Your Classes"}
      ></TitleSection>
      <div className="overflow-x-auto mt-8">
        <table className="table">
          <thead>
            <tr>
              <th className="font-bold text-2xl text-black">#</th>
              <th className="font-bold text-2xl text-black">Image</th>
              <th className="font-bold text-2xl text-black">Class Name</th>
              <th className="font-bold text-2xl text-black">Available Seats</th>
              <th className="font-bold text-2xl text-black ml-12">Price</th>
              <th className="font-bold text-2xl text-black ml-12">Pay</th>
              <th className="font-bold text-2xl text-black ml-12">Action</th>
            </tr>
          </thead>
          <tbody>
            {studentclasses.map((classes, index) => (
              <tr key={classes._id}>
                <td className="font-bold text-xl">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={classes.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="font-bold text-xl">{classes.className}</td>
                <td className="font-bold text-xl text-right">{classes.seat}</td>
                <td className="font-bold text-xl">{classes.price}</td>
                <td>
                  <button>
                    <FaAmazonPay style={{fontSize:"35px"}} />
                  </button>
                </td>
                <td>
                  <button>
                    <FaTrashAlt className="ml-5 text-red-500" style={{fontSize:"30px"}} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsClasses;
