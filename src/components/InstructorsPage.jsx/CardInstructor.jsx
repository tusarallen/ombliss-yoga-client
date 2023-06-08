/* eslint-disable react/prop-types */
const CardInstructor = ({ instructor }) => {
  const { name, email, photo } = instructor;

  return (
    <div className="card w-96 h-96 glass mb-12">
      <figure>
        <img src={photo} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><span className="font-bold text-red-500">Instructor Name:</span> {name}</h2>
        <p><span className="font-bold text-red-500">Instructor Email:</span> {email}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default CardInstructor;
