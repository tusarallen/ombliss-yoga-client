/* eslint-disable react/prop-types */
const PopularCard = ({ selectClass }) => {
  const { className, name, price, seat, image, enrolled } = selectClass;

  return (
    <div
      className={`card w-96 bg-base-100 ${
        seat === 0 ? "bg-red-500" : "shadow-xl"
      }`}
    >
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-[450px] h-[400px]"
        />
      </figure>
      <div className="card-body text-left">
        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 text-white font-bold rounded-md mr-2">
            Class Name
          </span>
          : {className}
        </h2>

        <h3 className="text-lg font-bold text-gray-900 sm:text-xl my-3">
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 text-white font-bold rounded-md mr-2">
            Instructor
          </span>
          : {name}
        </h3>

        <h4>
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 text-white font-bold rounded-md mr-2">
            Enrolled
          </span>
          :{" "}
          <span className={seat === 0 ? "text-red-500" : ""}>0{enrolled}</span>
        </h4>

        <h4 className="my-4">
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 text-white font-bold rounded-md mr-2">
            Available Seat
          </span>
          : <span className={seat === 0 ? "text-red-500" : ""}>{seat}</span>
        </h4>
        <h4 className="">
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 text-white font-bold rounded-md mr-2">
            Price
          </span>
          : <span className="font-bold">{price}</span>
        </h4>
      </div>
    </div>
  );
};

export default PopularCard;
