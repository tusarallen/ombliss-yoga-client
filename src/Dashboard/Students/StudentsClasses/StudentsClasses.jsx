import { useQuery } from "@tanstack/react-query";
import TitleSection from "../../../components/TitleSection";
import useAuth from "../../../hooks/useAuth";
import { FaAmazonPay, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const StudentsClasses = () => {
  const { user } = useAuth();
  const { data: studentclasses = [], refetch } = useQuery(
    ["studentclasses"],
    async () => {
      const res = await fetch(
        `https://om-bliss-yoga-server.vercel.app/studentclasses?email=${user?.email}`
      );
      return res.json();
    }
  );
  console.log(studentclasses);

  const handleDeletedClass = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://om-bliss-yoga-server.vercel.app/studentclasses/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | Class</title>
      </Helmet>
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
                  <Link
                    to={`/dashboard/payment/${classes._id}`}
                    state={{
                      paymentzid: classes._id,
                      classesName: classes.className,
                    }}
                  >
                    <button>
                      <FaAmazonPay title="pay" style={{ fontSize: "35px" }} />
                    </button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDeletedClass(classes._id)}>
                    <FaTrashAlt
                      title="delete"
                      className="ml-5 text-red-500"
                      style={{ fontSize: "30px" }}
                    />
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
