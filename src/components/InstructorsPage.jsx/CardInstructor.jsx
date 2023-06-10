/* eslint-disable react/prop-types */
const CardInstructor = ({ instructor }) => {
  const { photo, name, email } = instructor;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-[300px]" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body mt-8">
        <h2 className="font-bold mt-4 text-2xl">Name: {name}</h2>
        <p className="font-bold mt-4 text-xl">Email: {email}</p>
      </div>
    </div>
  );
};

export default CardInstructor;
