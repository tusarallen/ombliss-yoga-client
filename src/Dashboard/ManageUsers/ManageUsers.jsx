import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TitleSection from "../../components/TitleSection";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const updateUserRole = (user, role) => {
    fetch(`http://localhost:5000/users/${role}/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Modified User Successsfully!`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | Manage Users</title>
      </Helmet>
      <TitleSection
        subHeading={"Hi Admin?"}
        heading={"Manage Users"}
      ></TitleSection>
      <div className="overflow-x-auto mt-8">
        <table className="table">
          <thead>
            <tr>
              <th className="font-bold text-2xl text-black">#</th>
              <th className="font-bold text-2xl text-black">Image</th>
              <th className="font-bold text-2xl text-black">Name</th>
              <th className="font-bold text-2xl text-black">Email</th>
              <th className="font-bold text-2xl text-black ml-12">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="font-bold text-xl">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="font-bold text-xl">{user.name}</td>
                <td className="font-bold text-xl">{user.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    <button className="rounded-md hover:bg-black bg-success hover:text-white text-[black] p-2 font-bold text-base">
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => updateUserRole(user, "admin")}
                      className="rounded-md hover:bg-black bg-[orange] hover:text-white text-[black] p-2 font-bold text-base"
                    >
                      Make Admin
                    </button>
                  )}
                  {user?.role === "instructor" ? (
                    <button className="rounded-md hover:bg-black bg-success hover:text-white text-[black] p-2 font-bold text-base ml-2">
                      Instructor
                    </button>
                  ) : (
                    <button
                      onClick={() => updateUserRole(user, "instructor")}
                      className="rounded-md hover:bg-black bg-[orange] hover:text-white text-[black] p-2 font-bold text-base ml-2"
                    >
                      Make Instructor
                    </button>
                  )}
                  {user?.role === "student" && (
                    <button className="rounded-md hover:bg-black bg-success hover:text-white text-[black] p-2 font-bold text-base">
                      Student
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
