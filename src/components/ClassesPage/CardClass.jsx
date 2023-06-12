import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CardclassName = ({
  selectClass,
  isAdmin,
  isInstructor,
  axiosSecure,
  user,
}) => {
  const { className, name, price, seat, image, enrolled } = selectClass;

  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please log in before selecting the course.",
      });
      return;
    }

    if (isAdmin || isInstructor) {
      alert("Admins/instructors cannot select a course.");
      return;
    }

    // Prepare the data to send to the backend server
    const data = {
      className,
      price,
      enrolled,
      seat,
      email: user.email,
      image,
    };

    // Send the data to the backend server
    axiosSecure.post("/studentclasses", data).then((res) => {
      if (res.data.insertedId) {
        console.log(res.data.insertedId);
      }
    });

    // Handle course selection logic here
    // Example implementation:
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `You have selected the course: ${className}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
        <button
          className={`btn btn-outline btn-success mt-4 ${
            seat === 0 || isAdmin || isInstructor ? "disabled" : ""
          }`}
          onClick={handleSelect}
          disabled={seat === 0 || isAdmin || isInstructor}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default CardclassName;
