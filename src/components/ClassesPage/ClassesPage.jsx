import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ClassesPage = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.toyName.value;
    const sellerName = user?.displayName;
    const email = user?.email;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const info = {
      sellerName,
      email,
      photo,
      name,
      price,
      category,
      rating,
      quantity,
      description,
    };

    console.log(info);

    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <h2 className="font-bold text-3xl text-center text-red-500 my-8">
        Add A Class
      </h2>
      <div>
        <form onSubmit={handleAddToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto mt-5 font-bold">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy URL</span>
              </label>
              <input
                type="text"
                name="photo"
                className="input input-bordered"
                placeholder="photo"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                name="toyName"
                className="input input-bordered"
                placeholder="name"
                required
              />
            </div>
            <div className="form-control text-gray-500">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control text-gray-500">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subcategory</span>
              </label>
              <input
                type="text"
                name="category"
                className="input input-bordered"
                placeholder="category"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                className="input input-bordered"
                placeholder="price"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                className="input input-bordered"
                placeholder="rating"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                className="input input-bordered"
                placeholder="quantity"
                required
              />
            </div>
          </div>
          <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <textarea
              type="number"
              name="description"
              className="input input-bordered h-[80px]"
              placeholder="description"
              required
            />
          </div>
          <div className="form-control mt-6 mb-12 w-11/12 mx-auto">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Add Toy"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ClassesPage;
