import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import TitleSection from "../../components/TitleSection";

const UpdateData = () => {
  const classes = useLoaderData();
  console.log(classes);

  const { className, seat, price, _id } = classes;

  const handleUpdateClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const seat = form.seat.value;
    const className = form.className.value;

    const info = {
      price,
      seat,
      className,
    };
    console.log(info);

    // send data to the server
    fetch(`http://localhost:5000/instructors/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <>
      <TitleSection
        heading={"Update Classes"}
      ></TitleSection>
      <div className="font-bold">
        <form onSubmit={handleUpdateClass}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto mt-5 font-bold">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                className="input input-bordered text-gray-500"
                defaultValue={price}
                placeholder="price"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seat</span>
              </label>
              <input
                type="number"
                name="seat"
                className="input input-bordered text-gray-500"
                defaultValue={seat}
                placeholder="seat"
                required
              />
            </div>
          </div>
          <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
                type="text"
                name="className"
                className="input input-bordered text-gray-500"
                defaultValue={className}
                placeholder="Class Name"
                required
              />
          </div>
          <div className="form-control mt-6 mb-12 w-11/12 mx-auto">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Update Class"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateData;
