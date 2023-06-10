import { FaAddressBook, FaHouseDamage, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructors from "../hooks/useInstructors";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructors();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {isAdmin ? (
            <>
              <span className="ml-4 font-bold text-3xl text-red-500">Hi Admin !</span>
              <li className="font-bold text-2xl my-8">
                <Link to="/dashboard/manageClasses">
                  <FaAddressBook className="mr-4" /> Manage Classes
                </Link>
              </li>
              <li className="font-bold text-2xl">
                <Link to="/dashboard/manageUsers">
                  <FaUsers className="mr-4" /> Manage Users
                </Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <span className="ml-4 font-bold text-3xl text-red-500">Hi Instructors !</span>
              <li className="font-bold text-2xl my-8">
                <Link to="/dashboard/addclass">
                  <FaAddressBook className="mr-4" /> Add a Class
                </Link>
              </li>
              <li className="font-bold text-2xl">
                <Link to="/dashboard/myclass">
                  <FaUsers className="mr-4" /> My Classes
                </Link>
              </li>
            </>
          ) : (
            <>
              <span className="ml-4 font-bold text-3xl text-red-500">Hi Students !</span>
              <li className="font-bold text-2xl my-[12px]">
                <Link to="/dashboard/manageClasses">
                  <FaAddressBook className="mr-4" /> Selected Classes
                </Link>
              </li>
              <li className="font-bold text-2xl my-3">
                <Link to="/dashboard/manageUsers">
                  <FaUsers className="mr-4" /> Enrolled Classes
                </Link>
              </li>
              <li className="font-bold text-2xl mt-1">
                <Link to="/dashboard/manageUsers">
                  <FaUsers className="mr-4" /> Payment History
                </Link>
              </li>
            </>
          )}
          <div className="divider"></div>
          {/* common part for all user */}
          <li className="font-bold text-2xl my-4">
            <Link to="/">
              <FaHouseDamage className="mr-4" /> Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
