/* eslint-disable react/prop-types */
const TitleSection = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center my-4 w-[400px]">
      <p className="text-yellow-500 font-bold text-2xl mb-2">---{subHeading}---</p>
      <h3 className="text-4xl font-bold uppercase border-y-2 p-4">{heading}</h3>
    </div>
  );
};

export default TitleSection;
