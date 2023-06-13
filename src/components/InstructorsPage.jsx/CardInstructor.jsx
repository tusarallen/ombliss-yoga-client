/* eslint-disable react/prop-types */
const CardInstructor = ({ instructor }) => {
  const { photo, name, email , role } = instructor;

  console.log(instructor)
  return (
    <div className="card card-compact w-96 bg-base-200 shadow-2xl">
      <figure>
        <img className="h-[300px]" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body mt-4">
        <h1 className="font-extrabold mt-2 text-success text-2xl">{role}</h1>
        <h3 className="font-bold mt-2 text-xl">Name: {name}</h3>
        <p className="font-bold mt-2 text-lg">Contact: {email}</p>
      </div>
    </div>
  );
};

export default CardInstructor;
