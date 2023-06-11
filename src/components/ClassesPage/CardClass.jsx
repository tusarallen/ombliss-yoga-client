import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardclassName = ({ selectClass }) => {
  const { className, name, price, seat, image } = selectClass;
  return (
    <div className="mb-5">
      <Link
        href="#"
        className="relative block overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-center sm:gap-[300px]">
          <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
              <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 text-white font-bold rounded-md">
                Class Name:
              </span>{" "}
              {className}
            </h2>

            <h3 className="text-lg font-bold text-gray-900 sm:text-xl my-3">
              <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 text-white font-bold rounded-md">
                Instructor:
              </span>{" "}
              {name}
            </h3>
            <h4>Available Seat: {seat}</h4>
            <h4>Price: {price}</h4>
            <button className="btn btn-outline btn-success">Select</button>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src={image}
              className="h-32 w-32 rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardclassName;
