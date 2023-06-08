import { FaAddressBook, FaHome, FaHouseDamage, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
          <li className="font-bold text-2xl">
            <Link>
              <FaHome className="mr-4 text-red-500" />{" "}
              <span className="text-red-500">Admin Home</span>
            </Link>
          </li>
          <li className="font-bold text-2xl my-8">
            <Link>
              <FaAddressBook className="mr-4" /> Manage Classes
            </Link>
          </li>
          <li className="font-bold text-2xl">
            <Link>
              <FaUsers className="mr-4" /> Manage Users
            </Link>
          </li>
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
