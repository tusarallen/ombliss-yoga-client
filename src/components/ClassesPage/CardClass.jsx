/* eslint-disable react/prop-types */
const CardclassName = ({ selectClass }) => {
  const { className, name, price, seat, image } = selectClass;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
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

        <h4 className=" my-4">
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 text-white font-bold rounded-md mr-2">
            Available Seat
          </span>
          : <span className="">{seat}</span>
        </h4>
        <h4 className="">
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 text-white font-bold rounded-md mr-2">
            Price
          </span>
          : <span className="font-bold">{price}</span>
        </h4>
        <button className="btn btn-outline btn-success mt-4">Select</button>
      </div>
    </div>
  );
};

export default CardclassName;
