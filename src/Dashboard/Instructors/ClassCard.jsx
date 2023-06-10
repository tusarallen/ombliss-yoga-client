/* eslint-disable react/prop-types */
const ClassCard = ({ instructor }) => {
  const { className, email, price, status, seat, image, name } = instructor;

  return (
    <div className="w-11/12 mx-auto mb-7">
      <div className="card card-side bg-base-100 shadow-2xl">
        <figure>
          <img className="rounded-md hero-overlay" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className=""><span className="text-[green] text-2xl">Name:</span> <span className="text-xl font-bold text-black">{name}</span></h2>
          <h2 className=""><span className="text-[green] text-2xl">Email:</span> <span className="text-xl font-bold text-black">{email}</span></h2>
          <p><span className="font-bold text-[green] text-2zl text-2xl">Class:</span> <span className="text-xl font-bold text-black">{className}</span></p>
          <div className="flex">
            <p><span className="font-bold text-[green] text-2xl">Seat:</span> <span className="text-xl font-bold text-black">{seat}</span></p>
            <p><span className="font-bold text-[green] text-2xl">Price:</span> <span className="text-xl font-bold text-black">{price}</span></p>
          </div>
          <div className="flex gap-4 mt-3">
            <button className="btn btn-info">{status}</button>
            <button className="btn btn-success">Denied</button>
            <button className="btn btn-warning">Approved</button>
            <button className="btn btn-error">Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
