/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ClassCard = ({ instructor }) => {
  const { className, email, price, seat, image, name, _id, feedback } =
    instructor;

  return (
    <div className="w-11/12 mx-auto mb-7">
      <div className="card card-side bg-base-100 shadow-2xl">
        <figure>
          <img
            className="rounded-md h-[300px] w-[530px] ml-4"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="">
            <span className="text-[green] text-2xl">Name:</span>{" "}
            <span className="text-xl font-bold text-black">{name}</span>
          </h2>
          <h2 className="">
            <span className="text-[green] text-2xl">Email:</span>{" "}
            <span className="text-xl font-bold text-black">{email}</span>
          </h2>
          <p>
            <span className="font-bold text-[green] text-2xl">Class:</span>{" "}
            <span className="text-xl font-bold text-black">{className}</span>
          </p>
          <div className="flex gap-4">
            <div>
              <span className="font-bold text-[green] text-2xl">Seat:</span>{" "}
              <span className="text-xl font-bold text-black">{seat}</span>
            </div>
            <div>
              <span className="font-bold text-[green] text-2xl">Price:</span>{" "}
              <span className="text-xl font-bold text-black">{price}</span>
            </div>
            <div>
              <span className="font-bold text-[green] text-2xl">FeedBack:</span>{" "}
              <span className="text-xl font-bold text-black">{feedback}</span>
            </div>
          </div>
          <Link to={`/dashboard/instructors/${_id}`}>
            <button className="btn btn-success mt-5">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
