import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const [userRoles, setUserRoles] = useState({});

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
            title: `Modified User Successfully!`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  const toggleUserRole = (userId, role) => {
    setUserRoles((prevRoles) => ({
      ...prevRoles,
      [userId]: role,
    }));
  };

  return (
    <div>
      <Helmet>
        <title>ŌmBliss Yoĝa | Manage Users</title>
      </Helmet>
      <h2 className="font-bold text-3xl text-center text-red-500 my-8">
        Manage All Of Your Users Here:
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="font-bold text-2xl text-black">#</th>
              <th className="font-bold text-2xl text-black">Image</th>
              <th className="font-bold text-2xl text-black">Name</th>
              <th className="font-bold text-2xl text-black">Email</th>
              <th className="font-bold text-2xl text-black">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
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
                  {userRoles[user._id] === "admin" ? (
                    <button className="rounded-md hover:bg-black bg-success hover:text-white text-[black] p-2 font-bold text-base">
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        toggleUserRole(user._id, "admin");
                        updateUserRole(user, "admin");
                      }}
                      className="rounded-md hover:bg-black bg-[orange] hover:text-white text-[black] p-2 font-bold text-base"
                    >
                      Make Admin
                    </button>
                  )}
                  {userRoles[user._id] === "instructor" ? (
                    <button className="rounded-md hover:bg-black bg-success hover:text-white text-[black] p-2 font-bold text-base ml-2">
                      Instructor
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        toggleUserRole(user._id, "instructor");
                        updateUserRole(user, "instructor");
                      }}
                      className="rounded-md hover:bg-black bg-[orange] hover:text-white text-[black] p-2 font-bold text-base ml-2"
                    >
                      Make Instructor
                    </button>
                  )}
                  {userRoles[user._id] === "student" && (
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
